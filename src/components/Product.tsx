import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
import { Button, Card, Text, Flex } from '@mantine/core';
import { ProductDto } from 'src/types/types';

interface ProductProps {
    product: ProductDto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { id, image, category, title, price, rating } = product;

    return (
        <Card shadow="sm" style={{ width: '50%', marginRight: 20 }}>
            <Flex>
                <img
                    src={image}
                    alt=""
                    style={{ width: 200, height: 200, objectFit: 'cover' }}
                />
                <div style={{ padding: '1rem' }}>
                    <Text size="lg">{title}</Text>
                    <Text size="sm" color="gray">{category}</Text>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        <Text size="sm">{rating.rate} ({rating.count} reviews)</Text>
                        <Text size="sm">${price}</Text>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Button variant="light" color="blue" style={{ marginRight: '0.5rem' }}>
                            <IconHeart /> Add to Wishlist
                        </Button>
                        <Link to={`/product/${id}`}>
                            <Button variant="light" color="blue">
                                <IconArrowRight /> View Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </Flex>
        </Card>
    );
};

export default Product;



