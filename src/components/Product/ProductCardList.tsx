import React from 'react';
import { ProductDto } from '../../lib/dto/product';
import { ProductCard } from './ProductCard';

interface ProductCardListProps {
    productList: ProductDto[];
    onOpenProductDetails: (product: ProductDto) => void;
}

export function ProductCardList({ productList, onOpenProductDetails }: ProductCardListProps) {
    return (
        <ul className="divide-y divide-gray-200" style={{ margin: '0', padding: '0' }}>
            {productList.map((productItem) => (
                <ProductCard key={productItem.id} item={productItem} onOpenModal={onOpenProductDetails} />
            ))}
        </ul>
    );
}
