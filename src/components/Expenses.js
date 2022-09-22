import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
    return (
        <Card className="expenses">
            {props.item.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;
