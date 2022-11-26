import { useState, useRef } from 'react';
const SimpleInput = (props) => {
    const [nameInput, setNameInput] = useState('');

    const [nameInputValid, setNameInputValid] = useState(true);

    const [isTouched, setIsTouched] = useState(false);

    const nameInputRef = useRef();

    const nameInputChangeHandler = (event) => {
        setNameInput(event.target.value);
    };

    const formSubmitHandler = (event) => {
        setIsTouched(true);
        //  http 전송을 막기 위함 -> http 전송이 되면 페이지가 새로 고침이 된다
        event.preventDefault();
        console.log(`useState : ${nameInput}`);
        if (nameInput.trim() === '') {
            setNameInputValid(false);
            return;
        }
        setNameInputValid(true);
        //  ref는 항상 current 프로퍼티를 갖게 된다
        const nameInputRefValue = nameInputRef.current.value;
        console.log(`useRef : ${nameInputRefValue}`);

        setNameInput('');
        //  아래와 같이 사용하지 않는다 => dom 객체를 직접 접근하여 제어하기 때문이다
        //  NOT IDEAL, DON'T MANIPULATE THE DOM
        //  nameInputRefValue.current.value = '';
    };

    const nameInputIsInvalid = isTouched && !nameInputValid;

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
                    ref={nameInputRef}
                    value={nameInput}
                />
            </div>
            {nameInputIsInvalid && <p>name is null</p>}
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
