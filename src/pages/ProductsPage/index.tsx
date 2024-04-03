import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../lib/api/product";
import { ProductCard } from "./components/ProductCard";
import { Link } from "react-router-dom";

export function ProductsPage() {
    const { isLoading, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isLoading) {
        return <span>Loading</span>
    }

    return (
        <div className="grid grid-cols-7 gap-6">
            {data?.map((product) => (
                <Link to={'/products/' + product.id} >
                    <ProductCard key={product.id} item={product} />
                </Link>
            ))}
        </div>
    )
} 