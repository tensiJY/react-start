import React, { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    //  리듀스에서는 첫 번째 인자로 함수를 받는다,
    //  리듀스에서는 두 번째 인자로 초기값(시작값)을 받는다,
    //      리듀스에서 첫 번째 인자인 함수는
    //          1번째 인자 : 초기값
    //          2번째 인자 : 배열의 아이템 (반복문의 값)
    const numberOfCartItems = cartCtx.items.reduce((carNumber, item) => {
        return carNumber + item.amount;
    }, 0);

    console.log(numberOfCartItems);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
