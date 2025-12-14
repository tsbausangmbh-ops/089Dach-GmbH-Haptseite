// Google Calendar Integration (via Replit Connector)
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Calendar not connected');
  }
  return accessToken;
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

  const current = new Date(startDate);
  while (current < endDate) {
    const dayOfWeek = current.getDay();
    
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Generate hourly slots from 8:00 to 17:00
      for (let hour = 8; hour < 17; hour++) {
        const slotStart = new Date(current);
        slotStart.setHours(hour, 0, 0, 0);
        
        const slotEnd = new Date(current);
        slotEnd.setHours(hour + 1, 0, 0, 0);
        
        // Check if slot overlaps with any busy period
        const isBusy = busySlots.some(busy => {
          const busyStart = new Date(busy.start!);
          const busyEnd = new Date(busy.end!);
          return slotStart < busyEnd && slotEnd > busyStart;
        });
        
        // Only include future slots
        if (slotStart > new Date()) {
          slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            available: !isBusy,
          });
        }
      }
    }
    
    current.setDate(current.getDate() + 1);
    current.setHours(0, 0, 0, 0);
  }

  return slots;
}
