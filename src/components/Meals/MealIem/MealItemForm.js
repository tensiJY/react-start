import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
    //  ref를 통해서 input에 접근 할 수 있다.
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);
    console.log(`amountIsValid : ${amountIsValid}`);
    const submitHandler = (event) => {
        event.preventDefault();
        //console.log(amountInputRef.current);
        //  ref에 접근하는 방법
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = enteredAmount;

        if (
            enteredAmount.trim() === '' ||
            enteredAmountNumber < 0 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid((prev) => {
                return false;
            });
            return;
        }
        props.onAddToCart(enteredAmountNumber);
        setAmountIsValid((prev) => {
            return true;
        });
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: `amount_${props.id}`,
                    type: 'number',
                    //min: '1',
                    //max: '5',
                    setp: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;
