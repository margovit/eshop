import { ProductDto } from '../dto/product';

export async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data as ProductDto[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
}