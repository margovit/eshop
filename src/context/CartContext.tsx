import React, { ReactNode, createContext, useState } from 'react';


interface CartContextType{
    addToCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({
    addToCart:() =>{},
});

interface CartProviderProps{
    children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState([]);

    const addToCart = (id: number) => {
        console.log('added')
    }

    return (
        <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
    );
};

export default CartProvider;