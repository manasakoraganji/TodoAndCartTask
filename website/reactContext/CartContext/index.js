import React from "react";

const CartContext =React.createContext({
    cartList:[],
    setCartList:()=>{},
    removeItemInCart:()=>{},
    removeAllItemsInCart:()=>{},
})
export default CartContext