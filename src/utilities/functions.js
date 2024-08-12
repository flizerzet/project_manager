export const getDay = (date) => {
  let day;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  day = days[date.getDay()]

  return day;
}

export const getMonth = (date) => {
  let month;

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  month = months[date.getMonth()];

  return month;
}