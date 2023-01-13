import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //data
  var expenses = [
    {id: 1, title: 'Item 1', amount: 5, date: new Date(2022, 30, 12)},
    {id: 2, title: 'Item 2', amount: 3, date: new Date(2022, 25, 12)},
    {id: 3, title: 'Item 3', amount: 13, date: new Date(2022, 15, 12)},
  ];

  const saveExpenseHandler = (inputExpenseData) => {

    const expenseData = {
      ...inputExpenseData,
      id: Math.random()
    }

    console.log(expenseData);
  }

  return (
    <div style={{ 'padding': 20 }}>
      <NewExpense onSaveExpenseHandler={saveExpenseHandler} /> <br/>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
