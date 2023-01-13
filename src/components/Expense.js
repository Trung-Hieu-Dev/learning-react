import ExpenseItem from './ExpenseItem';

function Expense(props) {
  //   var expenseList = [];
  //   props.expenses.forEach((item, index) => {
  //     expenseList.push(
  //       <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date} />
  //     );
  //   });

  //   var expenseList = props.expenses.map((item, index) => (
  //     <ExpenseItem
  //       key={index}
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //     />
  //   ));

  return props.expenses.map((item, index) => (
    <ExpenseItem
      key={index}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
}

export default Expense;
