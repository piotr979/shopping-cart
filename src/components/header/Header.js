import React, { Fragment, useState } from "react";
import ReactDOM from 'react-dom';
import ShoppingCartList from './../shoppingcart/ShoppingCartList';
import classes from './Header.module.css';
import ShoppingCartToggleButton from "./ShoppingCartToggleButton";

const Header = (props) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!isModalOpen);
    }
    return (
        <Fragment>
        { isModalOpen && ReactDOM.createPortal(
 <ShoppingCartList handleModal={handleModal}/>, document.getElementById('cart-overlay')
)
        }
      
        <header>
            <div className={classes['header-items']}>
            <p className={classes['header-logo']}>Shopping Cart</p>
            <ShoppingCartToggleButton handleModal={handleModal} />
            </div>
            <h1>Choose from the menu</h1>
          
        </header>
        </Fragment>
    )
}

export default Header;