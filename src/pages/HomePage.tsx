import { ProductDto } from '../types/types';
import { Container, Grid } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';


const HomePage = () => {
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json() as Promise<ProductDto[]>;
        }
    });

    const filteredProducts = products.filter((item: ProductDto) => (
        item.category === "men's clothing" || item.category === "women's clothing"
    ));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Hero />
            <div className='my-30'></div>
            <Container size="2xl">
                <Grid
                    justify="flex-start"
                    align="flex-start"
                    gutter="lg"
                    className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                >
                    {filteredProducts.map((product: ProductDto) => (
                        <div key={product.id}>
                            <ProductList products={[product]} id={product.id} />
                        </div>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default HomePage;