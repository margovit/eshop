import { CloseButton, SimpleGrid } from '@mantine/core';
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
                cols={3}
                verticalSpacing="xl"
                spacing="lg"
            >
                <div className="flex">
                    <Link to={`/product/${id}`}>
                        <img className='max-w-[80px]' src={image} alt='' />
                    </Link>
                </div>
                <div className='ml-4 flex flex-col justify-center'>
                    <Link to={`/product/${id}`}
                        className='text-xs uppercase font-bold text primary hover:underline'
                    >
                        {title}
                        </Link>
                        <CloseButton size="sm" variant="transparent" className='hover'/>
                </div>
            </SimpleGrid>
        </div>
    );
};

export default CartItem;