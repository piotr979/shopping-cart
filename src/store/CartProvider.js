import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    console.log(state.items);

    if (action.type === 'ADD') {
     
       // get the item from exiisting array
       // if not get it from the data
       // check if item is added already to array
       // 

       let updatedItems;

       
       const updatedTotalAmount = +state.totalAmount + +action.item.amount;

        // check if the item is in the cart already

       const indexOfExistingItemInCart = state.items.findIndex(
                (item) => item.id === action.item.id
            );
       const exisitingItemInCart = state.items[indexOfExistingItemInCart];
      
       // how check if it exists 
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
    console.log(updatedItems);
        return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
       // 1. first if not, get data of
    //    let newItem = {
    //     ...itemData,
    //     amount: action.item.amount
    //    };

      
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
        items: cartState.items,
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
