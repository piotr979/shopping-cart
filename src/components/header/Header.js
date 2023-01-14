import React from "react";
import classes from './Header.module.css';
import ShoppingCartToggleButton from "./ShoppingCartToggleButton";

const Header = (props) => {
    return (
        <header>
            <div className={classes['header-items']}>
            <p className={classes['header-logo']}>Shopping Cart</p>
            <ShoppingCartToggleButton />
            </div>
            <h1>Choose from the menu</h1>
          
        </header>
    )
}

export default Header;