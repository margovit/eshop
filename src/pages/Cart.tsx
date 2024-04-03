import { fetchProducts } from '../lib/api/product';
import { ProductDto } from 'src/lib/dto/product';
import React, { useEffect, useState } from 'react';
import { useCart } from './CartPage/components/CartContext'; 
import { ProductCard } from './ProductsPage/components/ProductCard';

export const Cart: React.FC = () => {
    const { addToCart } = useCart();
    const [cartProducts, setCartProducts] = useState<ProductDto[]>([]);
    const [clickedToAdd, setClickedToAdd] = useState<boolean>(false);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts();
            } catch (error) {
                console.error('Error loading products:', error);
            }
        };

        loadProducts();
    }, []);

    const handleAddToCart = (product: ProductDto) => {
        addToCart(product);
        setClickedToAdd(true);
        setCartProducts([...cartProducts, product]); 
    };

    return (
        <div>
            <h1>Cart</h1>
            {cartProducts.map(product => (
                <ProductCard key={product.id} item={product} onAddToCart={() => {}} /> 
            ))}
            {clickedToAdd && (
                <div>
                    <h2>Recently Added</h2>
                    {cartProducts.map(product => (
                        <ProductCard key={product.id} item={product} onAddToCart={() => {}} /> 
                    ))}
                </div>
            )}
        </div>
    );
};
