import React from 'react';
import { ProductDto } from '../types/types';
import Product from './Product';

interface ProductListProps {
  products: ProductDto[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
      <div className="flex flex-wrap justify-start">
            {products.map(product => (
                <div key={product.id} style={{ width: '320px', height: '320px' }}> 
                    <Product product={product} />
                    {product.title.split(' ').length === 1 ? <div style={{ marginTop: '8px' }} /> : null}
                </div>
            ))}
        </div>
    );
};


export default ProductList;