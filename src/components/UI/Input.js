import React from 'react';
import classes from './Input.module.css';

/*
input = {
    id : '',
    text '',
}
*/

//  forwardRef로 감싸주면, props 와 ref 를 사용할 수 있다
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} id={props.input.id} {...props.input} />
        </div>
    );
});

export default Input;
