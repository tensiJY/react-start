import { useState } from 'react';
const SimpleInput = (props) => {
    const [nameInput, setNameInput] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const nameInputValid = nameInput.trim() !== '';
    const nameInputIsInvalid = isTouched && !nameInputValid;

    let formIsValid = false;

    if (nameInputValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setNameInput(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const formSubmitHandler = (event) => {
        //  http 전송을 막기 위함 -> http 전송이 되면 페이지가 새로 고침이 된다
        event.preventDefault();
        console.log(`useState : ${nameInput}`);
        setIsTouched(true);
        if (!nameInputValid) {
            return;
        }

        setNameInput('');
        setIsTouched(false);
        //  아래와 같이 사용하지 않는다 => dom 객체를 직접 접근하여 제어하기 때문이다
        //  NOT IDEAL, DON'T MANIPULATE THE DOM
        //  nameInputRefValue.current.value = '';
    };

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={nameInput}
                />
            </div>
            {nameInputIsInvalid && <p>name is null</p>}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
