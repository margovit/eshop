import React, { createContext, useState, useEffect, ReactNode } from "react";
import Product from "src/components/Product";
import { ProductDto } from "src/types/types";

interface ProductContextType{
    products: ProductDto[];
}

export const ProductContext =  createContext<ProductContextType>({
    products: [],
});

const ProductProvider = ({children}:{children:ReactNode}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    },[]);

    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;