import React, { ReactNode, createContext, useState } from 'react';
import { ProductDto } from '../types/types';


interface ProductDtoWithAmount extends ProductDto {
    amount: number;
}

interface CartContextType {
    cart: ProductDtoWithAmount[];
    addToCart: (product: ProductDto, id: number) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
});

interface CartProviderProps{
    children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<ProductDtoWithAmount[]>([]); 

    const addToCart = (product: ProductDto, id: number) => {
        const newItem: ProductDtoWithAmount = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id.toString();
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id.toString()) {
                    return { ...item, amount: cartItem.amount + 1 };
                }else{
                    return item;
                }
                
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
    );
};

export default CartProvider;