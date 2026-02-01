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
  
  // Target: 40% of days completely booked, 40% of remaining slots per day booked
  const DAYS_BOOKED_PERCENTAGE = 0.40;
  const SLOTS_BOOKED_PERCENTAGE = 0.40;

  const current = new Date(startDate);
  while (current < endDate) {
    const dayOfWeek = current.getDay();
    
    // Skip Sunday (0 = Sunday), Saturday has limited hours
    if (dayOfWeek !== 0) {
      // Check if entire day should be marked as "fully booked" (40% of days)
      const dayDate = current.getFullYear() * 10000 + (current.getMonth() + 1) * 100 + current.getDate();
      const daySeed = (dayDate * 17 + dayOfWeek * 31) % 100000;
      const isDayFullyBooked = seededRandom(daySeed) < DAYS_BOOKED_PERCENTAGE;
      
      if (!isDayFullyBooked) {
        // Saturday: 10:00-14:00, Weekdays: 8:00-17:00
        const startHour = dayOfWeek === 6 ? 10 : 8;
        const endHour = dayOfWeek === 6 ? 14 : 17;
        
        for (let hour = startHour; hour < endHour; hour++) {
          const slotStart = new Date(current);
          slotStart.setHours(hour, 0, 0, 0);
          
          const slotEnd = new Date(current);
          slotEnd.setHours(hour + 1, 0, 0, 0);
          
          // Check if slot overlaps with any busy period (including 2-hour buffer)
          const BUFFER_HOURS = 2;
          const BUFFER_MS = BUFFER_HOURS * 60 * 60 * 1000;
          
          const isReallyBusy = busySlots.some(busy => {
            const busyStart = new Date(busy.start!);
            const busyEnd = new Date(busy.end!);
            
            // Extend busy period by 2 hours before and after
            const bufferedBusyStart = new Date(busyStart.getTime() - BUFFER_MS);
            const bufferedBusyEnd = new Date(busyEnd.getTime() + BUFFER_MS);
            
            return slotStart < bufferedBusyEnd && slotEnd > bufferedBusyStart;
          });
          
          // Generate individual "fake busy" slots (40% per day, different pattern each day)
          const slotSeed = (dayDate * 13 + hour * 23 + dayOfWeek * 7) % 100000;
          const isFakeBusy = seededRandom(slotSeed) < SLOTS_BOOKED_PERCENTAGE;
          
          // Only include future slots
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
    
    current.setDate(current.getDate() + 1);
    current.setHours(0, 0, 0, 0);
  }

  return slots;
}
