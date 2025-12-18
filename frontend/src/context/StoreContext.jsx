import { createContext, useEffect, useState } from "react";
import { food_list as foods } from "../assets/assets/frontend_assets/assets";


export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => { 


    const [cartItems, setCartItems] = useState([]); 
     
    const addToCart = (itemId) => {
        if (cartItems[itemId]) {
            setCartItems( (prev) => ({...prev, [itemId]: 1}))
     }  
        else {
            setCartItems( (prev) => ({...prev, [itemId]: prev[itemId] + 1}) )
        }
    } 

    const removeFromCart = (itemId) => {
        setCartItems( ( prev)=>  ({...prev,[itemId]: prev[itemId]-1}))
    }
    
    const [food_list, setFoodList] = useState(foods);

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);

    const value = {
        food_list,
        setFoodList,
        cartItems,
        addToCart,
        removeFromCart,

        };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};
