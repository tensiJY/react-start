import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// useReducer
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isValid: action.val.includes('@'),
        };
    }

    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.includes('@'),
        };
    }
    return {
        value: '',
        isValid: false,
    };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_PASSWORD') {
        return {
            value: action.val,
            isValid: action.val.length > 6,
        };
    }

    if (action.type === 'PASSWORD_INPUT_BLUR') {
        return {
            value: state.value,
            isValid: state.value.length > 6,
        };
    }

    return {
        value: '',
        isValid: false,
    };
};

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState('');
    //const [enteredPassword, setEnteredPassword] = useState('');
    //const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    console.log(
        `emailIsValid : ${emailIsValid}, passwordIsValid : ${passwordIsValid}`
    );

    useEffect(() => {
        console.log('EFFECT RUNNING');
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log('EFFECT CLEANUP');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({
            type: 'USER_INPUT',
            val: event.target.value,
        });

        setFormIsValid(
            event.target.value.includes('@') && passwordState.length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        //setEnteredPassword(event.target.value);
        dispatchPassword({ type: 'USER_PASSWORD', val: event.target.value });

        setFormIsValid(emailState.isValid && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        //setEmailIsValid(emailState.isValid);
        dispatchEmail({
            type: 'INPUT_BLUR',
        });
    };

    const validatePasswordHandler = () => {
        //setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({
            type: 'PASSWORD_INPUT_BLUR',
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
