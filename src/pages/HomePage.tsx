import React, {useContext} from 'react';
import { ProductDto } from '../types/types'; 
import { ProductContext } from 'src/context/ProductContext';
import Product from 'src/components/Product';

interface ProductProps{
    product: ProductDto[];
}

const HomePage = ()=>{
    const {products} = useContext(ProductContext);
    const filteredProducts = products.filter((item: ProductDto) =>{
        return (
            item.category === "men's clothing" || item.category === "women's clothing"
        );
    });

    return (
        <div>
            {filteredProducts?.map((product: ProductDto) =>{
                return(
                    <Product product={product} key={product.id}/>
                );
            })}
        </div>
        )
};

export default HomePage;