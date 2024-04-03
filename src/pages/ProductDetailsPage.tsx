import { Route } from 'react-router-dom';
import { ProductDetails } from '../components/Product/ProductDetails';
import { ProductDto } from '../lib/dto/product';

interface ProductDetailsPageProps {
    product: ProductDto;
}

export function ProductDetailsPage({ product }: ProductDetailsPageProps) {
    return (
        <div>
            <h1>{product.title}</h1>
            <ProductDetails product={product} />
            {/* Дополнительный контент деталей продукта, если необходимо */}
        </div>
    );
}
