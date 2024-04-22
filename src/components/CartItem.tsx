import { Button, CloseButton, Card } from '@mantine/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductDto } from '../types/types';

interface CartItemType {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
    product?: ProductDto;
}

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    const { id, title, image, price, amount } = item;
    return (
        <div className='mb-4 shadow-xs p-4 rounded-lg relative'>
            <CloseButton onClick={() => removeFromCart(item.id, item.product!)} size="sm" variant="transparent" className='absolute top-0 right-0 mt-1 hover:text-[#eb5e28]' />
            <div className='flex items-center'>
                <img className='max-w-[80px]' src={image} alt='' />
                <div className='ml-4 flex flex-col flex-grow'>
                    <Link to={`/product/${id}`}>
                        <h3 className='text-xs text-gray-700 font-bold uppercase cursor point'>{title}</h3>
                    </Link>
                    <div className='flex justify-between items-center mt-4 mr-2'>
                        <div className='flex items-center space-x-1'>
                            <Button
                                variant='light'
                                color='#252422'
                                size='xs'
                                className='mr-1'
                                onClick={() => increaseAmount(id)}
                            >
                                +
                            </Button>
                            <div className='text-xs'>{amount}</div>
                            <Button
                                variant='light'
                                color='#252422'
                                size='xs'
                                className='ml-1'
                                onClick={() => decreaseAmount(id)}
                            >
                                -
                            </Button>
                        </div>
                        </div>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='text-xs font-semibold text-gray-500'>{price.toFixed(2)}{`$`}</div>
                        <div className='text-xs font-bold text-gray-700'>{`${(price * amount).toFixed(2)}`}{` $`}</div>
                    </div>
                </div>
            </div>
            <hr className='my-4 border-gray-300' />
        </div>
    );
};

export default CartItem;