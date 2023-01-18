import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
       return {
        items: [],
        totalAmount: action.item.amount
       }
    }

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        console.log(item);
            dispatchCartAction({type: 'ADD', item: item});
        }
    
    const cartContext = {
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler

    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
