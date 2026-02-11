// Google Calendar Integration (via Replit Connector)
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const replIdentity = process.env.REPL_IDENTITY;
  const webReplRenewal = process.env.WEB_REPL_RENEWAL;
  
  // Log environment status for debugging (values hidden for security)
  console.log('[GoogleCalendar] Environment check:', {
    hasHostname: !!hostname,
    hasReplIdentity: !!replIdentity,
    hasWebReplRenewal: !!webReplRenewal,
    nodeEnv: process.env.NODE_ENV
  });
  
  const xReplitToken = replIdentity 
    ? 'repl ' + replIdentity 
    : webReplRenewal 
    ? 'depl ' + webReplRenewal 
    : null;

  if (!hostname) {
    throw new Error('REPLIT_CONNECTORS_HOSTNAME not set - Google Calendar connector may not be attached');
  }

  if (!xReplitToken) {
    throw new Error('Neither REPL_IDENTITY nor WEB_REPL_RENEWAL available - cannot authenticate with Replit Connectors');
  }

  try {
    const response = await fetch(
      'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
      {
        headers: {
          'Accept': 'application/json',
          'X_REPLIT_TOKEN': xReplitToken
        }
      }
    );
    
    if (!response.ok) {
      console.error('[GoogleCalendar] Connector API error:', response.status, response.statusText);
      throw new Error(`Connector API returned ${response.status}`);
    }
    
    const data = await response.json();
    connectionSettings = data.items?.[0];
    
    if (!connectionSettings) {
      console.error('[GoogleCalendar] No connection found in response:', JSON.stringify(data));
      throw new Error('Google Calendar connector not configured - please reconnect in Replit');
    }

    const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;

    if (!accessToken) {
      console.error('[GoogleCalendar] No access token in connection settings');
      throw new Error('Google Calendar access token missing - please reconnect in Replit');
    }
    
    console.log('[GoogleCalendar] Successfully retrieved access token');
    return accessToken;
  } catch (error) {
    console.error('[GoogleCalendar] Failed to get access token:', error);
    throw error;
  }
}

export async function getUncachableGoogleCalendarClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export async function createCalendarEvent(
  summary: string,
  description: string,
  startTime: Date,
  durationMinutes: number = 30
) {
  const calendar = await getUncachableGoogleCalendarClient();
  
  const endTime = new Date(startTime.getTime() + durationMinutes * 60000);
  
  const event = {
    summary,
    description,
    start: {
      dateTime: startTime.toISOString(),
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: 'Europe/Berlin',
    },
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: event,
  });

  return response.data;
}

export interface TimeSlot {
  start: string;
  end: string;
  available: boolean;
}

// Simple seeded random number generator for consistent "fake busy" slots
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getBerlinOffset(date: Date): number {
  const month = date.getUTCMonth();
  const day = date.getUTCDate();
  const marchLastSunday = 31 - new Date(Date.UTC(date.getUTCFullYear(), 2, 31)).getUTCDay();
  const octoberLastSunday = 31 - new Date(Date.UTC(date.getUTCFullYear(), 9, 31)).getUTCDay();
  const isCEST = (month > 2 && month < 9) ||
    (month === 2 && day >= marchLastSunday) ||
    (month === 9 && day < octoberLastSunday);
  return isCEST ? 2 : 1;
}

function createBerlinDate(year: number, month: number, day: number, hour: number, minute: number = 0): Date {
  const tempDate = new Date(Date.UTC(year, month, day, 12, 0, 0));
  const offset = getBerlinOffset(tempDate);
  return new Date(Date.UTC(year, month, day, hour - offset, minute, 0, 0));
}

export async function getAvailableSlots(startDate: Date, endDate: Date): Promise<TimeSlot[]> {
  const calendar = await getUncachableGoogleCalendarClient();
  
  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      timeZone: 'Europe/Berlin',
      items: [{ id: 'primary' }],
    },
  });

  const busySlots = response.data.calendars?.primary?.busy || [];
  const slots: TimeSlot[] = [];
  
  const DAYS_BOOKED_PERCENTAGE = 0.60;
  const SLOTS_BOOKED_PERCENTAGE = 0.40;

  const current = new Date(startDate);
  current.setUTCHours(12, 0, 0, 0);
  
  while (current < endDate) {
    const year = current.getUTCFullYear();
    const month = current.getUTCMonth();
    const day = current.getUTCDate();
    const dayOfWeek = current.getUTCDay();
    
    if (dayOfWeek !== 0) {
      const dayDate = year * 10000 + (month + 1) * 100 + day;
      const daySeed = (dayDate * 17 + dayOfWeek * 31) % 100000;
      const isDayFullyBooked = seededRandom(daySeed) < DAYS_BOOKED_PERCENTAGE;
      
      if (!isDayFullyBooked) {
        const startHour = dayOfWeek === 6 ? 10 : 8;
        const endHour = dayOfWeek === 6 ? 14 : 18;
        
        for (let hour = startHour; hour < endHour; hour++) {
          const slotStart = createBerlinDate(year, month, day, hour);
          const slotEnd = createBerlinDate(year, month, day, hour + 1);
          
          const BUFFER_HOURS = 2;
          const BUFFER_MS = BUFFER_HOURS * 60 * 60 * 1000;
          
          const isReallyBusy = busySlots.some(busy => {
            const busyStart = new Date(busy.start!);
            const busyEnd = new Date(busy.end!);
            const bufferedBusyStart = new Date(busyStart.getTime() - BUFFER_MS);
            const bufferedBusyEnd = new Date(busyEnd.getTime() + BUFFER_MS);
            return slotStart < bufferedBusyEnd && slotEnd > bufferedBusyStart;
          });
          
          const slotSeed = (dayDate * 13 + hour * 23 + dayOfWeek * 7) % 100000;
          const isFakeBusy = seededRandom(slotSeed) < SLOTS_BOOKED_PERCENTAGE;
          
          if (slotStart > new Date()) {
            slots.push({
              start: slotStart.toISOString(),
              end: slotEnd.toISOString(),
              available: !isReallyBusy && !isFakeBusy,
            });
          }
        }
      }
    }
    
    current.setUTCDate(current.getUTCDate() + 1);
  }

  return slots;
}
