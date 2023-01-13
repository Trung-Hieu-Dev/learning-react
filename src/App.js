import './App.css';
import Expense from './components/Expense/Expense';

function App() {
  //data
  var expenses = [
    {id: 1, title: 'Item 1', amount: 5, date: new Date(2022, 30, 12)},
    {id: 2, title: 'Item 2', amount: 3, date: new Date(2022, 25, 12)},
    {id: 3, title: 'Item 3', amount: 13, date: new Date(2022, 15, 12)},
  ];

  return (
    <div >
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
