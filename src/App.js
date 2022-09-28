import Expenses from './components/Expenses/Expenses.js_bak';
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expense, setExpense] = useState(expenses);

    // const [filter, setFilter] = useState(false);
    // const [filterExpense, setFilterExpense] = useState([]);

    const addExpenseHandler = (expenseData) => {
        console.log(expenseData);
        setExpense((prev) => [...prev, expenseData]);
    };

    // const filterExpenseHandler = (data) => {
    //     console.log(`filterExpenseHandler : ${data}`);
    //     setFilter(() => (data === '0' ? false : true));
    //     setFilterExpense(() => {
    //         return data === '0'
    //             ? []
    //             : expense.filter(
    //                   (item) => item.date.getFullYear().toString() === data
    //               );
    //     });
    // };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />

            <Expenses item={expense} />
        </div>
    );
};

export default App;
