import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import { Button, Text, Rating } from '@mantine/core';
import { ProductDto } from 'src/types/types';
import { CartContext } from '../context/CartContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductProps {
    product: ProductDto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price, rating } = product;

    return (
        <div className='flex flex-row w-72 bg-white rounded-lg shadow-md p-4 m-4' style={{ width: '300px', height: '220px' }}>
            <img
                className='object-cover rounded-lg mr-4'
                src={image}
                alt={title}
                style={{ width: '100px', height: '100px' }}
            />
            <div className='flex flex-col flex-grow'>
                <Text size='xs' className='uppercase font-semibold text-gray-800 mb-2'>{title}</Text>
                <Text className='text-xs truncate' style={{ maxWidth: '150px' }}>{category}</Text>
                <Rating
                    value={rating.rate}
                    color="#eb5e28"
                    style={{ marginTop: '0.5rem' }}
                    readOnly
                />
                <div className='flex items-center mt-1'>
                    <Text className='text-xs'>{rating.rate} ({rating.count} reviews)</Text>
                    <Text className='text-xs font-semibold ml-auto'>${price}</Text>
                </div>
                <div className='mt-2'></div>
                    <div className='mt-auto flex items-center justify-between'>
                        <Button
                            variant='light'
                            color='#eb5e28'
                            className="mr-2 py-1 px-2"
                            onClick={() => addToCart(product, Number(id))}
                        >
                            <AiOutlineShoppingCart className='text-2xl' />
                        </Button>
                        <Link to={`/products/${id}`}>
                            <Button
                                variant="light"
                                color="#eb5e28"
                                className="ml-2 py-1 px-2"
                            >
                                <IconArrowRight />
                            </Button>
                        </Link>
                    
                </div>
            </div>
        </div>
    );
};


export default Product;



