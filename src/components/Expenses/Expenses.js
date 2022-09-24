import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const onFilterExpense = (args) => {
        //console.log(args);
        setFilterYear((prev) => args);
    };

    //console.log(props);
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterExpense={onFilterExpense}
                    filterYear={filterYear}
                />
                {props.item.map((item) =>
                    item.date.getFullYear().toString() === filterYear ? (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ) : null
                )}
            </Card>
        </div>
    );
}

export default Expenses;
