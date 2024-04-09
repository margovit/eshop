import { Button, CloseButton, SimpleGrid } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface CartItemType {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
}

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
    const { id, title, image, price, amount } = item;
    return (
        <div className="mb-10 mt-8">
            <SimpleGrid
                cols={1}
                verticalSpacing="xl"
                spacing="lg"
                className="items-start"
            >
                <div className="flex items-center">
                    <Link to={`/product/${id}`}>
                        <img className='max-w-[80px]' src={image} alt='' />
                    </Link>
                    <div className='ml-4 flex flex-col'>
                        <div className="flex justify-between items-center w-full">
                            <Link to={`/product/${id}`}
                                className='text-xs uppercase font-bold text-primary hover:underline'
                                style={{ marginRight: '1rem' }}
                            >
                                {title}
                            </Link>
                            <CloseButton size="sm" variant="transparent" />
                        </div>
                        <div className="flex mt-2 items-center">
                            <Button
                                variant="light"
                                color="yellow"
                                size="sm"
                                style={{ marginRight: '0.5rem',marginTop: '0.2rem', fontSize: '1rem' }}
                            >
                                +
                            </Button>
                            <div style={{ fontSize: '0.8rem', marginRight: '1rem' }}>{amount}</div>
                            <Button
                                variant="light"
                                color="yellow"
                                size="sm"
                                style={{ marginLeft: '0.5rem', marginTop: '0.2rem', fontSize: '1rem' }}
                            >
                                -
                            </Button>
                            <div style={{ marginLeft: 'auto', marginRight: '1rem' }}>{price.toFixed(2)} <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>USD</span></div>
                        </div>
                    </div>
                </div>
            </SimpleGrid>
        </div>
    );
};

export default CartItem;