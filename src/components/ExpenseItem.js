import Card from './Car';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    const clickHandler = () => {
        console.log('click');
    }
    
    return (
        <Card className="card">
            <ExpenseDate date={props.date} />
            <div>
                <h2 className="title">{props.title}</h2>
                <div>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;