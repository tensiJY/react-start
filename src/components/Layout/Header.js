import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            {/* -가 있으므로 . 점표기법으로 쓸수 없다 */}
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};

export default Header;
