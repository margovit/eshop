import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ProductDto } from "../types/types";

interface ProductContextProps {
    products: ProductDto[];
}

export const ProductContext = createContext<ProductContextProps>({
    products: [],
});

const ProductProvider = ({ children }: { children: ReactNode }) => {
    const { data: products = [], isLoading, error } = useQuery<ProductDto[], Error>({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return response.json();
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;