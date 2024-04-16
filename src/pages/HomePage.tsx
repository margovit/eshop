import { ProductDto } from '../types/types';
import Product from '../components/Product';
import { Container, Grid } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import ProductList from '../components/ProductList';


const HomePage = () => {
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error("Failed to fetch products");
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
        <div style={{ display: 'flex-wrap', flexDirection: 'row', gap: '20px' }}>
            <Container size="xl">
                <Grid justify="flex-start" align="flex-start" gutter="lg">
                    {filteredProducts?.map((product: ProductDto) => (
                         <Grid.Col key={product.id}>
                            <ProductList products={[product]} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;