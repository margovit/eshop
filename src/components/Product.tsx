import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
import { Button, Card, Text, Flex, Rating } from '@mantine/core';
import { ProductDto } from 'src/types/types';
import { CartContext } from '../context/CartContext';

interface ProductProps {
    product: ProductDto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, image, category, title, price, rating } = product;

    return (
        <div className='flex flex-row w-72 bg-white rounded-lg shadow-md p-4 m-4'>
            <img
                className='object-cover w-24 h-24 rounded-lg mr-4'
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
                <div className="flex items-center mt-1">
                    <Text className="text-xs">{rating.rate} ({rating.count} reviews)</Text>
                    <Text className="text-sm ml-auto">${price}</Text>
                </div>
                <div className="mt-auto flex items-center justify-between">
                    <Button
                        variant="light"
                        color="#eb5e28"
                        className="mr-2 py-1 px-2" // Upravujeme rozměry tlačítka
                        onClick={() => addToCart(product, Number(id))}
                    >
                        <IconHeart />
                    </Button>
                    <Link to={`/product/${id}`}>
                        <Button 
                            variant="light" 
                            color="#eb5e28"
                            className="py-1 px-2" // Upravujeme rozměry tlačítka
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



