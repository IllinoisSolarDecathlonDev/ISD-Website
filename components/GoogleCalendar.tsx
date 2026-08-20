"use client";

import { useEffect, useState } from "react";

interface GoogleCalendarProps {
  calendarId?: string;
  apiKey?: string;
  showTitle?: boolean;
}

/**
 * Google Calendar Component
 * 
 * Setup Instructions:
 * 
 * OPTION 1 - Embed (Easiest, no API key needed):
 * 1. Go to your Google Calendar
 * 2. Click the three dots next to your calendar name → Settings and sharing
 * 3. Scroll to "Integrate calendar" section
 * 4. Copy the "Public URL to calendar" or "Calendar ID"
 * 5. Set calendarId prop (e.g., "your-email@gmail.com" or the calendar ID)
 * 
 * OPTION 2 - API (More control, requires API key):
 * 1. Go to Google Cloud Console (console.cloud.google.com)
 * 2. Create a new project or select existing
 * 3. Enable "Calendar API"
 * 4. Create credentials (API Key)
 * 5. Restrict API key to Calendar API
 * 6. Set both calendarId and apiKey props
 * 7. Add NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY to your .env.local file
 */

export function GoogleCalendar({ 
  calendarId, 
  apiKey,
  showTitle = true 
}: GoogleCalendarProps) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default calendar ID - replace with your actual calendar ID
  const defaultCalendarId = calendarId || process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID || "";
  const defaultApiKey = apiKey || process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY || "";

  useEffect(() => {
    // If using API method, fetch events
    if (defaultApiKey && defaultCalendarId) {
      fetchCalendarEvents();
    } else {
      // If no API key, we'll use embed method
      setLoading(false);
    }
  }, [defaultApiKey, defaultCalendarId]);

  const fetchCalendarEvents = async () => {
    try {
      setLoading(true);
      const now = new Date();
      const maxDate = new Date();
      maxDate.setMonth(maxDate.getMonth() + 3); // Get next 3 months

      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        defaultCalendarId
      )}/events?key=${defaultApiKey}&timeMin=${now.toISOString()}&timeMax=${maxDate.toISOString()}&maxResults=10&singleEvents=true&orderBy=startTime`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch calendar events");
      }

      const data = await response.json();
      setEvents(data.items || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching calendar:", err);
      setError("Unable to load calendar events");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // If using embed method (no API key)
  if (!defaultApiKey && defaultCalendarId) {
    const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
      defaultCalendarId
    )}&ctz=America%2FChicago`;

    return (
      <section className="calendar-section">
        {showTitle && (
          <div className="calendar-header">
            <h2 className="calendar-title">Upcoming Events</h2>
            <p className="calendar-subtitle">Stay updated with our latest activities and meetings</p>
          </div>
        )}
        <div className="calendar-embed-wrapper">
          <iframe
            src={embedUrl}
            className="calendar-embed"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          />
        </div>
      </section>
    );
  }

  // If using API method
  return (
    <section className="calendar-section">
      {showTitle && (
        <div className="calendar-header">
          <h2 className="calendar-title">Upcoming Events</h2>
          <p className="calendar-subtitle">Stay updated with our latest activities and meetings</p>
        </div>
      )}

      {loading ? (
        <div className="calendar-loading">
          <div className="calendar-loading-spinner"></div>
          <p>Loading events...</p>
        </div>
      ) : error ? (
        <div className="calendar-error">
          <p>{error}</p>
          <p className="calendar-error-hint">
            Make sure your calendar is public or API key is configured correctly.
          </p>
        </div>
      ) : events.length === 0 ? (
        <div className="calendar-empty">
          <p>No upcoming events scheduled.</p>
        </div>
      ) : (
        <div className="calendar-events">
          {events.map((event, index) => {
            const startDate = event.start?.dateTime || event.start?.date;
            const endDate = event.end?.dateTime || event.end?.date;
            const isAllDay = !event.start?.dateTime;

            return (
              <div key={event.id || index} className="calendar-event-card">
                <div className="calendar-event-date">
                  <div className="calendar-event-day">
                    {new Date(startDate).getDate()}
                  </div>
                  <div className="calendar-event-month">
                    {new Date(startDate).toLocaleDateString("en-US", { month: "short" })}
                  </div>
                </div>
                <div className="calendar-event-content">
                  <h3 className="calendar-event-title">{event.summary || "Untitled Event"}</h3>
                  <div className="calendar-event-meta">
                    {isAllDay ? (
                      <span className="calendar-event-time">All Day</span>
                    ) : (
                      <span className="calendar-event-time">
                        {formatTime(startDate)} - {formatTime(endDate)}
                      </span>
                    )}
                    {event.location && (
                      <span className="calendar-event-location">📍 {event.location}</span>
                    )}
                  </div>
                  {event.description && (
                    <p className="calendar-event-description">
                      {event.description.length > 150
                        ? `${event.description.substring(0, 150)}...`
                        : event.description}
                    </p>
                  )}
                  {event.htmlLink && (
                    <a
                      href={event.htmlLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="calendar-event-link"
                    >
                      View in Google Calendar →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
