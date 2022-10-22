import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
/*
1. 
리액트 포털을 사용하려면 /public/intex.html 작업
        <div id="overlays"></div>
        <div id="root"></div>
    root 위에 div overlays id 추가 

2.
ReactDOM(react-dom) import 

3.
{ReactDOM.createPortal(<Backdrop />, portalElement)}
{ReactDOM.createPortal(
               <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
*/

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
