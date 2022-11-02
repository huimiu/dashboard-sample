export interface CalendarItem {
  id?: string;
  startTime: {
    dateTime: string;
    timeZone: string;
  };
  endTime: {
    dateTime: string;
    timeZone: string;
  };
  title: string;
  location?: string;
  url?: string;
}

export interface CalendarModel {
  items: CalendarItem[];
}
