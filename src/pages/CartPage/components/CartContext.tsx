import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductDto } from 'src/lib/dto/product';

interface CartContextType {
  cartItems: ProductDto[];
  addToCart: (product: ProductDto) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductDto[]>([]);

  const addToCart = (product: ProductDto) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
