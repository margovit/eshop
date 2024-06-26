import { ReactNode, createContext, useEffect, useState } from 'react';
import { ProductDto } from '../types/types';


interface ProductDtoWithAmount extends ProductDto {
    amount: number;
}

interface CartContextType {
    cart: ProductDtoWithAmount[];
    addToCart: (product: ProductDto, id: number) => void;
    removeFromCart: (id: number, product: ProductDto) => void;
    clearCart: () => void;
    increaseAmount: (id: number) => void;
    decreaseAmount: (id: number) => void;
    itemAmount: number;
    total: number;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
    increaseAmount: () => { },
    decreaseAmount: () => { },
    itemAmount: 0,
    total:0,
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<ProductDtoWithAmount[]>([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) =>{
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        setTotal(total);
    },[cart, setTotal]);

    useEffect(() => {
        let totalItems = 0;
        cart.forEach((item) => {
            totalItems += item.amount;
        });
        setItemAmount(totalItems);
    }, [cart]);

    const addToCart = (product: ProductDto, id: number) => {
        const newItem: ProductDtoWithAmount = { ...product, amount: 1 };
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount + 1 };
                } else {
                    return item;
                }

            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (id: ProductDto['id']) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    };

    const increaseAmount = (id: number) => {
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
            addToCart(cartItem, id);
        }
    };

    const decreaseAmount = (id: number) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            if (cartItem.amount > 1) {
                const newCart = cart.map((item) => {
                    if (item.id === id) {
                        return { ...item, amount: cartItem.amount - 1 };
                    } else {
                        return item;
                    }
                });
                setCart(newCart);
            } else {
                removeFromCart(id);
            }
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                increaseAmount,
                decreaseAmount,
                itemAmount,
                total,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;