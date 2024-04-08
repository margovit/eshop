import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../lib/api/product";
import { ProductCard } from "./components/ProductCard";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AppShell, rem } from "@mantine/core";

export function ProductsPage() {
    const { isLoading, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isLoading) {
        return <span>Loading</span>
    }

    return (
        <div>
            <section className="py-16">
                <div className='container mx-auto'>
                    <AppShell.Main
                        pt={`calc(${rem(60)} + var(--mantine-spasing-md))`}
                    >
                        <div className="w-full h-[300px] bg-grey">
                            {data?.map((product) => (
                                <Link to={'/products/' + product.id} key={product.id} >
                                    <MemorizedProductCard item={product} />
                                </Link>
                            ))}
                        </div>
                    </AppShell.Main>
                </div>
            </section>
        </div>
    )
}

const MemorizedProductCard = React.memo(ProductCard);