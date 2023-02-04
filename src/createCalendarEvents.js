// Function to create new events in a calendar using a JSON object
const createCalendarEvents = (eventData, calendarId) => {
    const calendar = CalendarApp.getCalendarById(calendarId);

    eventData.forEach(event => {
        if (event.end == null) {
            const eventStart = new Date(event.start);
            eventStart.setDate(eventStart.getDate() + 1);
            calendar.createAllDayEvent(event.summary, eventStart);
        } else {
            calendar.createEvent(event.summary,
                new Date(event.start),
                new Date(event.end), {
                    location: event.location
                });
        }
    });
};
