import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconHeart, IconArrowRight } from '@tabler/icons-react';
import { Button, Flex, Text } from '@mantine/core';
import { ProductDto } from 'src/types/types';

interface ProductProps{
    product: ProductDto;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { id, image, category, title, price, rating } = product;

    return (
        <div>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                    <img
                        className='max-h-[160px] group-hover:scale-110 transition duration-300'
                        src={image}
                        alt='' />
                </div>
                <Flex direction="column" mt="md">
                    <Text size="sm" className="weight-600">
                        {title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {category}
                    </Text>
                </Flex>
                <Flex align="center" justify="space-between">
                    <Text size="xs" color="dimmed">
                        {rating.rate} ({rating.count} reviews)
                    </Text>
                    <Text size="xs" color="dimmed">
                        $ {price}
                    </Text>
                </Flex>
                <div className='absolute top-6 right-0 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all' style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)' }}>
                    <Button variant="filled" color="yellow">
                        <div className='flex justify-center items-center text-white w-12 h-12'>
                            <IconHeart className='text-3xl' />
                        </div>
                    </Button>
                    <Link
                        to={`/product/${id}`}
                        className='w-12 h-12 flex justify-center item-center' style={{ color: 'yellow', backgroundColor: 'whitesmoke' }}>
                        <IconArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;



