function getDaysInMonth(year, month) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}


export default (req,res) => {
  const date = new Date();
  const days = getDaysInMonth(date.getFullYear(), date.getMonth())

  
  return res.json(days.map(d=>({
    date:d,
    weekDay:d.getDay(),
    day:d.getDate(),
  })))
}