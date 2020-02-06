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

  const {
    query: { year, month },
  } = req

  const days = getDaysInMonth(year, month)

  
  return res.json(days)
}