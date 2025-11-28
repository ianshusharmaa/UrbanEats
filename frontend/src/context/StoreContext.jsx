import { createContext, useState } from "react";
import { food_list as foods } from "../assets/assets/frontend_assets/assets";

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {

    // Load assets food_list directly into state
    const [food_list, setFoodList] = useState(foods);

    const value = {
        food_list,
        setFoodList,
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};
