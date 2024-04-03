import { useEffect, useRef, useState } from 'react';
import { ProductDto } from '../lib/dto/product';
import { useProductQuery } from '../hooks/useProductQuery';
import { ProductCardList } from './Product/ProductCardList';
import { withRouter, RouteComponentProps, Route } from 'react-router-dom'; 
import { ProductDetails } from './Product/ProductDetails';

interface ProductsProps extends RouteComponentProps<any> {} 

function Products({ history }: ProductsProps) { 
    const { isPending, data } = useProductQuery();
    const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(null);

    const openProductDetails = (product: ProductDto) => {
        <Route path="/products/:productId" component={ProductDetails} />

        history.push(`/products/${product.id}`);
    }

    if (isPending) {
        return <span>Loading</span>;
    }

    return (
        <div className="grid grid-cols-6 gap-4">
            {data && Object.keys(data).length > 0 ? (
                <ProductCardList productList={Object.values(data)} onOpenProductDetails={openProductDetails} />
            ) : (
                <div>No products available</div>
            )}
        </div>
    );
}

export default withRouter(Products); // Обертывание компонента Products в withRouter
