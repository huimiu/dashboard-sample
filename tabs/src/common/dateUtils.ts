function padTo2Digits(num: number) {
  return String(num).padStart(2, "0");
}

export function extractTime(dt: string) {
  var date = new Date(dt.concat("Z"));
  return padTo2Digits(date.getHours()) + ":" + padTo2Digits(date.getMinutes());
}
