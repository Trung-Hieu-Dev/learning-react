import Card from './Car';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    
    return (
        <Card>
            <ExpenseDate date={props.date} />
            <div>
                <h2 className="title">{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;