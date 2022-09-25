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

    const filterExpenses = props.item.filter(
        (item) => item.date.getFullYear().toString() === filterYear
    );

    let expensesContent = <p>No expenses found</p>;
    if (filterExpenses.length > 0) {
        expensesContent = filterExpenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterExpense={onFilterExpense}
                    filterYear={filterYear}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;