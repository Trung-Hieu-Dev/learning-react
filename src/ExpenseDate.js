function ExpenseDate(props) {
    //data
    var month = props.date.toLocaleString('en-US', {month: 'long'});
    var day = props.date.toLocaleString('en-US', {day: '2-digit'});
    var year = props.date.getFullYear();

  return (
    <div className="header">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
