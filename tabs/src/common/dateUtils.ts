function padTo2Digits(num: number) {
  return String(num).padStart(2, "0");
}

export function extractTime(dt: string) {
  var date = new Date(dt.concat("Z"));
  return padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
}

export function isToday(dt: string) {
  var date = new Date(dt.concat("Z"));
  var now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export function laterThanNow(dt: string) {
  var date = new Date(dt.concat("Z"));
  var now = new Date();
  return date < now;
}
