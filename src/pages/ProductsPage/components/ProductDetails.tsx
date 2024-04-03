import { ProductDto } from '../../../lib/dto/product';

interface ProductDetailsProps {
    product: ProductDto;
}

export function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
    );
}