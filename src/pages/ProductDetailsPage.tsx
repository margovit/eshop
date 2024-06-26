import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductDto } from '../types/types';
import { useQuery } from '@tanstack/react-query';
import { Text, Button, Rating } from '@mantine/core';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import Bg from '../images/bg.png';


export interface Rating {
    rate: number;
    count: number;
}

const ProductDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState<ProductDto | null>(null);

    const { isLoading, isError, data } = useQuery<ProductDto>({
        queryKey: ['product', id],
        queryFn: async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return response.json() as Promise<ProductDto>;
        },
        enabled: !!id,
    });


    useEffect(() => {
        if (data) {
            setProduct(data);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !product) {
        return <div>Error: Product not found</div>;
    }

    const { title, price, description, image } = product;
    return (
        <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center relative overflow-hidden'>
            <div className='container mx-auto relative z-10'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
                        <div className='absolute top-30 left-30 w-full h-full z-5' />
                        <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 ml-5 relative'>
                            <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
                        </div>
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                        <Text className='font-bold uppercase mb-5 max-w-[600px] mz-auto' style={{ color: '#252422', fontSize: '30px' }}>
                            {title}
                        </Text>
                        <Rating
                            value={product.rating.rate}
                            color="#eb5e28"
                            style={{ marginTop: '2rem' }}
                            readOnly
                        />
                        <Text className='text-md font-bold mb-6' style={{ color: '#403D38', marginBottom: '30px' }}>
                            $ {price}
                        </Text>
                        <Text style={{ marginBottom: '10px', fontSize: '16px', color: '#403D38' }}>
                            {description}
                        </Text>
                        <div className='flex space-x-4 md:flex-row md:space-x-4 md:items-center mt-4 lg:mt-10 lg:mb-auto'>
                            <Button
                                variant='light'
                                color='#eb5e28'
                                onClick={() => addToCart(product, Number(id))}
                                className='text-md'
                            >
                                Add to cart
                                <AiOutlineShoppingCart className='text-2xl' />
                            </Button>
                            <Button
                                variant='light'
                                color='#eb5e28'
                                className='text-md'
                            >
                                <Link to="/">Back to home</Link>
                                <AiOutlineHome className='text-2xl' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <img className='absolute bottom-10 right-0' src={Bg} alt='' />
        </section>
    );
};

export default ProductDetailsPage;