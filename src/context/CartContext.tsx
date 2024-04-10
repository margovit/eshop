import React, { ReactNode, createContext, useState } from 'react';
import { ProductDto } from '../types/types';


interface ProductDtoWithAmount extends ProductDto {
    amount: number;
}

interface CartContextType {
    cart: ProductDtoWithAmount[];
    addToCart: (product: ProductDto, id: number) => void;
    removeFromCard: (id: number, product: ProductDto) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCard:() =>{}
});

interface CartProviderProps{
    children: ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<ProductDtoWithAmount[]>([]); 

    const addToCart = (product: ProductDto, id: number) => {
        const newItem: ProductDtoWithAmount = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
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

    const removeFromCard = (id: number, product: ProductDto) =>{
        const newCart = cart.filter((item) =>{
            return item.id !== id;
        });
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCard }}>{children}</CartContext.Provider>
    );
};

export default CartProvider;