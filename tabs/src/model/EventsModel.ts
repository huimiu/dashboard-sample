export default interface EventsModel {
  id?: string;
  startTime: string;
  endTime: string;
  duration?: string;
  repeat?: boolean;
  title: string;
  subTitle: string;
  location?: string;
  url?: string;
}
