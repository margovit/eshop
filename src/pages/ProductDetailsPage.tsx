import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductDto } from '../types/types';
import { useQuery } from '@tanstack/react-query';
import { Text, Button } from '@mantine/core';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useContext(CartContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json() as Promise<ProductDto[]>;
        }
    });

    const productId = id ? parseInt(id) : undefined;

    const product = products.find(item => item.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { title, price, description, image } = product;
    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center '>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row itwms-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                        <Text className='font-bold uppercase mb-5 max-w-[600px] mz-auto' style={{ color: '#252422', fontSize: '30px' }}>
                            {title}
                        </Text>
                        <Text className='text-md font-bold mb-6' style={{ color: '#403D38',marginBottom: '30px' }}>
                            $ {price}
                        </Text>
                        <Text style={{ marginBottom: '10px', fontSize: '16px', color: '#403D38' }}>
                            {description}
                        </Text>
                        <div className='mt-4 lg:mt-10 lg:mb-auto'>
                            <Button
                                variant='light'
                                color='#eb5e28'
                                onClick={() => addToCart(product, Number(id))}
                                className='text-3xl'
                            >
                                <AiOutlineShoppingCart className='text-2xl' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsPage;