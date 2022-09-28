import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const onFilterExpense = (args) => {
        //console.log(args);
        setFilterYear((prev) => args);
    };

    const filterExpenses = props.item.filter(
        (item) => item.date.getFullYear().toString() === filterYear
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onFilterExpense={onFilterExpense}
                    filterYear={filterYear}
                />
                <ExpensesChart expenses={filterExpenses} />
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
