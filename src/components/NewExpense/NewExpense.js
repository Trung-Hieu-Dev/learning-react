import ExpenseForm from "./ExpenseForm";

function NewExpense() {

    //get data from child (ExpenseForm)
    const saveExpenseDataHandler = (expenseData) => {
        console.log(expenseData);
    }

    return (
        <div>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;