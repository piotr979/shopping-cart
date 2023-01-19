import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {

        let updatedItems;

        const updatedTotalAmount = +state.totalAmount + +action.item.amount;

        // check if the item is in the cart already

        const indexOfExistingItemInCart = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const exisitingItemInCart = state.items[indexOfExistingItemInCart];

        if (exisitingItemInCart) {
            const updatedItem = {
                ...exisitingItemInCart,
                amount: +exisitingItemInCart.amount + +action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[exisitingItemInCart] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type = "REMOVE") {

        let updatedItems;

        const itemToRemoveIndex = state.items.findIndex( 
            (item ) => item.id === action.id )
        
        const itemToRemove = state.items[itemToRemoveIndex];

        // check if is above 0
        if (itemToRemove.amount == 1) {
            console.log(action.id);
            updatedItems = state.items.filter( item => 
                item.id !== action.id )
        } else {
           const updatedItem = {...itemToRemove, amount: itemToRemove.amount - 1};
           updatedItems = [...state.items];
           updatedItems[itemToRemoveIndex] = updatedItem;
        }
        const totalAmountUpdated = state.totalAmount - 1;
        return {
            items: updatedItems,
            totalAmount: totalAmountUpdated
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction( { type: 'REMOVE', id: id} );
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
