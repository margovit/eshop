import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from '../lib/api/product';

export function useProductQuery() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
}