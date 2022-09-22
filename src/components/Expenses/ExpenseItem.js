import { useRef, useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    /*
    const [data, setData] = useState({
        title: props.title,
        amount: props.amount,
        date: props.date,
    });

    const { title, amount, date } = data;
    

    const clickHandler = (e) => {
        setData({
            ...data,
            title: '1111',
        });
    };
    */
    const [title, setTitle] = useState(props.title);

    const clickHandler = (e) => {
        e.preventDefault();
        setTitle('updated');
    };

    const countUp = () => {
        setTitle(`updated... `);
    };

    setTimeout(countUp, 10000);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={clickHandler}>click</button>
        </Card>
    );
}

export default ExpenseItem;
