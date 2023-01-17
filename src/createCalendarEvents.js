// Function to create new events in a calendar using a JSON object
const createCalendarEvents = (eventData, calendarId, startDate) => {
    const calendar = CalendarApp.getCalendarById(calendarId);

    eventData.forEach(event => {
        if (event.end == null) {
            calendar.createAllDayEvent(event.summary, new Date(event.start.getDate()));
        } else {
            calendar.createEvent(event.summary,
                event.start.getDateTime(),
                event.end.getDateTime(),
                {location: event.location});
        }
    });
};
