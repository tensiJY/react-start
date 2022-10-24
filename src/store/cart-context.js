import React from 'react';

//  값을 초기화
//  자동완성을 사용하기 위한 KEY선언 -> 실제로 사용되지 않는 값임
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;
