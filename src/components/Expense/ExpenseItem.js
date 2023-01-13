import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

    // var title = props.title;

    //hook
    var [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        // title = title + ' has been changed';
        setTitle(title + ' has been changed');
        console.log(title);
    }
    
    return (
        <Card className="card">
            <ExpenseDate date={props.date} />
            <div>
                <h2 className="title">{title}</h2>
                <div>${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;