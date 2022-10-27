import { useReducer } from 'react';

import CartContext from './cart-context';

//  리듀서의 초기값
const cartInitialState = {
    items: [],
    totalAmount: 0,
};

/**
 * 리듀서
 * @param {*} state
 * @param {*} action
 * @returns
 */
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        //  push는 기존 배열에 추가
        //  concat은 새 배열을 만듬
        //const updatedItems = [...state.items, action.item]
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
            state.totalAmount + action.item.totalAmount * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return cartInitialState;

    /*
    switch (action) {
        case 'ADD':
            
        case 'REMOVE':
            
            return ;
        default:
            return cartInitialState;
    }
    */
};

/**
 *
 * @param {} props
 * @returns
 */
const CartProvider = (props) => {
    //  state, action
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        cartInitialState
    );

    //  dispatch의 첫번째 인자는 객체다
    //  객채의 첫번째 속성을 type을 지정한다
    //      action.type으로 조건을 처리한다
    //             type의 값은 대문자로 한다
    //      두번째 속성을 값을 지정
    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item,
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    //  cartContext의 객체는 value 또는 value 프롭의 값으로 설정되었다

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
