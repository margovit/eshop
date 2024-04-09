import { Button, CloseButton, Card } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface CartItemType {
    id: string; 
    title: string;
    image: string;
    price: number;
    amount: number;
}

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
    const { id, title, image, price, amount } = item;
    return (
        <Card shadow="xs" padding="sm" radius="md" className="mb-8">
            <div className="flex items-center">
                <img className='max-w-[80px]' src={image} alt='' />
                <div className='ml-4 flex flex-col flex-grow'>
                    <Link to={`/product/${id}`}>
                        <h3 className='text-xs font-semibold uppercase'>{title}</h3>
                    </Link>
                    <div className="flex justify-between items-center mt-4 mr-2">
                        <div className="flex items-center">
                            <Button
                                variant="light"
                                color="yellow"
                                size="xs"
                                className="mr-2"
                            >
                                +
                            </Button>
                            <div>{amount}</div>
                            <Button
                                variant="light"
                                color="yellow"
                                size="xs"
                                className="ml-2"
                            >
                                -
                            </Button>
                        </div>
                        <div className="xs">{price.toFixed(2)} <span className="text-sm font-bold">USD</span></div>
                    </div>
                </div>
                <CloseButton size="sm" variant="transparent" className="ml-4" />
            </div>
        </Card>
    );
};

export default CartItem;