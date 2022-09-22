import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [inputs, setInputs] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const { title, amount, date } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        //console.log(`name : ${name} , value:${value}`);

        //  이전 상태에 의존할 수 도있음
        /*
        setInputs({
            ...inputs,
            [name]: value,
        });
        */

        //  아래와 같은 방법을 사용한다면 > 항상 최신의 값을 가짐 (안전한 방법)
        setInputs((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //console.log(inputs);
        const formData = {
            ...inputs,
            date: new Date(inputs.date),
        };

        setInputs((prev) => {
            const keys = Object.keys(prev);
            let obj = {};
            keys.forEach((item) => {
                obj[item] = '';
            });
            return obj;
        });
    };

    //console.log(inputs);

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={onChange}
                        name="title"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amount}
                        onChange={onChange}
                        name="amount"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={onChange}
                        name="date"
                    />
                </div>
            </div>
            <div className="expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;
