import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets"


export const StoreContext = createContext();

export const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemID) => {
        if (!cartItems[itemID]) {
            setCartItems((prev) => ({...prev,[itemID]:1}))
        }
        else {
            setCartItems((prev) => ({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev,[itemID]:prev[itemID]-1}))
    }

    
    useEffect(() => {
        console.log(cartItems);
        
    },[cartItems])



    const contextValue={
        food_list, addToCart, removeFromCart, cartItems, setCartItems
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}