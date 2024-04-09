import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
import { Button, Card, Text, Flex } from '@mantine/core';
import { ProductDto } from 'src/types/types';
import {CartContext} from '../context/CartContext';

interface ProductProps {
    product: ProductDto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const { id, image, category, title, price, rating } = product;

    return (
        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <Card className='border border-[#E1DEE6] h-[300px] mb-4 relative overflow-hidden group transition'
                    shadow="xl"
                    style={{ width: '35%', marginRight: 20, borderWidth: '0.1px' }}>
                    <Flex>
                        <img
                            className='max-h-[250px] group-hover:scale-110'
                            src={image}
                            alt=""
                            style={{ width: 100, height: 150, objectFit: 'cover' }}
                        />
                        <div style={{ padding: '1rem' }}>
                            <Text className='font-semibold mb-2'size="lg">{title}</Text>
                            <Text size="sm" color="41444b">{category}</Text>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                                <Text
                                    size="sm">{rating.rate} ({rating.count} reviews)</Text>
                                <Text size="sm" style={{ marginLeft: '40px' }}>${price}</Text>
                            </div>
                            <div
                                style={{ marginTop: '1rem' }}>
                                <Button variant="light" color="yellow" style={{ marginRight: '0.5rem' }}
                                onClick={() => addToCart(product, Number(id))}
                                >
                                    <IconHeart />
                                </Button>
                                <Link to={`/product/${id}`}>
                                    <Button variant="light" color="yellow">
                                        <IconArrowRight />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Flex>
                </Card>
            </div>
        </div>
    );
};

export default Product;



