import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    
    return (
        <div>
            <ExpenseDate date={props.date} />
            <div>
                <h2 className="title">{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;