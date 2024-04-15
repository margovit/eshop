import React, { useContext } from 'react';
import { ProductDto } from '../types/types';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';
import { Container, Grid } from '@mantine/core';

interface ProductProps {
    product: ProductDto;
}

const HomePage = () => {
    const { products } = useContext(ProductContext);
    const filteredProducts = products.filter((item: ProductDto) => (
        item.category === "men's clothing" || item.category === "women's clothing"
    ));

    return (
        <div>
            <Container size="xl">
                <Grid justify="flex-start" align="flex-start" gutter="lg">
                    {filteredProducts?.map((product: ProductDto) => (
                        <Grid.Col span={12} key={product.id}>
                            <Product product={product} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;