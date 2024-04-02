import { Card, Image, Text, Group, Button, Modal, AspectRatio, rem } from '@mantine/core';
import { useQuery } from "@tanstack/react-query";
import { useState } from 'react';
import { ProductDto } from '../../lib/dto/product';
import { ProductDetails } from './components/ProductDetails';
import { fetchProducts } from '../../lib/api/product';


export function Products() {
    const { isPending, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(null);

    if (isPending) {
        return <span>Loading</span>
    }

    const openModal = (product: ProductDto) => {
        setSelectedProduct(product);
    }

    const closeModal = () => {
        setSelectedProduct(null);
    }

    return (
        <div className="grid grid-cols-3 gap-6">
            {data && data.map((product: ProductDto) => (
                <ProductCard key={product.id} item={product} onOpenModal={openModal} />
            ))}
            {selectedProduct && (
                <Modal opened onClose={closeModal} title={selectedProduct.title} size="md">
                    <ProductDetails product={selectedProduct} />
                </Modal>
            )}
        </div>
    )
}

interface ProductCardProps {
    item: ProductDto;
    onOpenModal?: (product: ProductDto) => void;
}

export function ProductCard({ item, onOpenModal }: ProductCardProps) {
    return (
        <div className="grid grid-cols-1">
            <div style={{ display: 'flex' }}>
                <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
                    <Card
                        className="bg-dimmed w-full max-w-sm"
                        shadow="sm"
                        padding="md"
                        radius="md"
                        withBorder
                        style={{ cursor: 'pointer' }}
                    >
                        <Image src={item.image} alt={item.title} className="w-full h-auto" />
                        <Group py={10} justify="space-between">
                            <Group gap={5}>
                                <Text fw={500} size="sm">{item.rating.rate}
                                    <Text size="xs" c="dimmed">{item.rating.count}x</Text>
                                    {item.title}
                                </Text>
                                <Text c="dimmed" fz="xs">
                                    {item.category}
                                </Text>
                                <Button size="xs" variant="filled" color="yellow" onClick={() => onOpenModal?.(item)}>
                                    Add
                                </Button>
                            </Group>
                        </Group>
                    </Card>
                </AspectRatio>
            </div>
        </div>
    );
}


export default function ProductCardList({ product: productList }: { product: ProductDto[] }) {
    return (
        <ul className="divide-y divide-gray-200">
            {productList.map((productItem) => (
                <ProductCard key={productItem.id} item={productItem} />
            ))}
        </ul>
    );
}
