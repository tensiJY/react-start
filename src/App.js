import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = (e) => {
        console.log(e);
        setCartIsShown((prev) => {
            return true;
        });
    };

    const hideCartHandler = (e) => {
        console.log(e);
        setCartIsShown((prev) => false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
