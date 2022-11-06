import React, { useContext, useState, useEffect } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    //  리듀스에서는 첫 번째 인자로 함수를 받는다,
    //  리듀스에서는 두 번째 인자로 초기값(시작값)을 받는다,
    //      리듀스에서 첫 번째 인자인 함수는
    //          1번째 인자 : 초기값
    //          2번째 인자 : 배열의 아이템 (반복문의 값)
    const numberOfCartItems = cartCtx.items.reduce((cartNumber, item) => {
        //console.log(item.amount);
        return cartNumber + Number(item.amount);
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;
    useEffect(() => {
        if (items === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //  기타 사이드이펙트는 정리하는 것이 좋은 습관이다
        //  클린업 함수를 반환
        return () => {
            console.log(`clean up : headerCartButton`);
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
