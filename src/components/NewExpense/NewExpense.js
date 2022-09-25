import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = (event) => {
        event.preventDefault();
        setIsEditing((prev) => true);
    };

    const stopEditingHandler = (event) => {
        event.preventDefault();
        setIsEditing((prev) => false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        //console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);

        props.onAddExpense(expenseData);
        setIsEditing((prev) => false);
    };

    return (
        <div className="new-expense">
            {isEditing === false && (
                <button onClick={startEditingHandler}> Add New Expense</button>
            )}
            {isEditing === true && (
                <NewExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onStopEditingHandler={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
