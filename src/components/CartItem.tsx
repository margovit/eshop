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
        <Card shadow="xs" padding="sm" radius="lg" className='mb-4'>
            <div className="flex items-center">
                <img className='max-w-[80px]' src={image} alt='' />
                <div className='ml-4 flex flex-col flex-grow'>
                    <Link to={`/product/${id}`}>
                        <h3 className='text-xs font-semibold uppercase cursor point'>{title}</h3>
                    </Link>
                    <div className="flex justify-between items-center mt-4 mr-2">
                        <div className="flex items-center space-x-2">
                            <Button
                                variant='light'
                                color='#403d39'
                                size="xs"
                                className="mr-2"
                                onClick={() =>increaseAmount(id) }
                            >
                                +
                            </Button>
                            <div className='text-xs'>{amount}</div>
                            <Button
                                variant='light'
                                color='#403d39'
                                size="xs"
                                className="ml-2"
                                onClick={() => decreaseAmount(id)}
                            >
                                -
                            </Button>
                            <div className="text-xs font-bold ml-8 text-gray-500">{price.toFixed(2)} <span className="text-xs font-bold">{`$`}</span>
                            </div>
                        </div>
                        <div className='text-xs font-bold text-gray-700'><span className="text-xs font-bold text-gray-700">{`$`}</span> {`${(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
                <CloseButton onClick={() => removeFromCart(item.id, item.product!)} size="xs" variant="transparent"  className='ml-4 hover:text-[#eb5e28]' />

            </div>
        </Card>
    );
};

export default CartItem;