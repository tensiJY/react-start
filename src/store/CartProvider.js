import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};

    const removeItemFromCartHandler = (id) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
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
