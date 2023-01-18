import React, { useContext } from "react";

const CartContext = React.createContext( {
    amountTotal: 0,
    addToAmountTotal: () => {},
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;

