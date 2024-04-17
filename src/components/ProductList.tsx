import React from 'react';
import { ProductDto } from '../types/types';
import Product from './Product';

interface ProductListProps {
  products: ProductDto[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
      <div className='product-list'>
        <div className='row'>
          {products.map(product => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ProductList;