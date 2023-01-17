// Example: const calendarId = getCalendarIdByName(calendarName);
const getCalendarIdByName = (calendarName) => {
    const calendarList = Calendar.CalendarList.list();
    const calendar = calendarList.items.find(calendar => calendar.summary === calendarName);
    if (calendar) return calendar.id;
    else throw new Error(`Calendar with the name '${calendarName}' not found.`);
};
