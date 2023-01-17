const BuildBCLionsCalendar = () => {
    const calendarId = getCalendarIdByName("BC Lions Schedule");
    const events = readCalendarEvents(calendarId, new Date("01/01/2023"), new Date("12/01/2023"));

    Logger.log(JSON.stringify(events, null, 2));
};

const BuildWhitecapsCalendar = () => {
    const calendarId = "186vqua8r0v6e3ctr7764pqvpo@group.calendar.google.com";  //getCalendarIdByName("Vancouver Whitecaps FC");
    const events = readCalendarEvents(calendarId, new Date("01/01/2023"), new Date("12/01/2023"));

    Logger.log(JSON.stringify(events, null, 2));
};