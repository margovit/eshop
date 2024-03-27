import { useQuery } from "@tanstack/react-query";

function fetchProducts(){

    return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
}

export function Products() {
    const { isPending, data }  = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    console.log(isPending, data)


    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}