// Function to read events from a Google Calendar within a specified date range
const readCalendarEvents = (calendarId, startDate, endDate) => {
    const events = Calendar.Events.list(calendarId, {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString()
    });

    const eventData = events.items
        .map(event => {
            var start = event.start.dateTime;
            if ( start == null ) {
                start = event.start.date
            }
            return {
                summary: event.summary,
                location: event.location,
                start: start,
                end: event.end.dateTime
            }
        })
        .sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
        });

    if (eventData.length > 0) {
        return eventData;
    } else {
        Logger.log("No events found in the specified date range.");
    }
};
