import { useState } from "react";
import { ProductDto } from "src/lib/dto/product";
import { ProductDetails } from "./ProductsPage/components/ProductDetails";
import { AppShell } from '@mantine/core';
import { useHeadroom } from "@mantine/hooks";
import { useColorScheme } from '@mantine/hooks';

export function ProductPage() {

    const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(null);
    const pinned = useHeadroom();

    const handleProductSelect = (product: ProductDto) => {
        setSelectedProduct(product);
    };

    return (
        <div>
        <AppShell 
        header={{ height: 60, collapsed: !pinned, offset: false }} padding="md"
      >
            <AppShell.Header>Information about products</AppShell.Header>

            {selectedProduct && (
                <ProductDetails product={selectedProduct} />
            )}
            
        </AppShell>
    </div>
);
}