import classes from './ShoppingCartToggleButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const ShoppingCartToggleButton = (props) => {

    const cartCtx = useContext(CartContext);

    return (
        <button 
            onClick={props.handleModal} 
            className={classes.cartToggleButton}>
            View cart {cartCtx.totalAmount}</button>
    )
}

export default ShoppingCartToggleButton;
