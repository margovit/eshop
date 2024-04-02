import { Card, Image, Text, Group, Button, Modal, AspectRatio, rem } from '@mantine/core';
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from 'react';
import { ProductDto } from '../../lib/dto/product';
import { ProductDetails } from './components/ProductDetails';
import { fetchProducts } from '../../lib/api/product';


export function Products() {
    const { isLoading, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(null);

    if (isLoading) {
        return <span>Loading</span>
    }

    const openModal = (product: ProductDto) => {
        setSelectedProduct(product);
    }

    const closeModal = () => {
        setSelectedProduct(null);
    }

    return (
        <div className="grid grid-cols-7 gap-6">
            {data?.map((product: ProductDto) => (
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
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const buttonElement = buttonRef.current;
            if (!buttonElement) return;

            const descriptionElement = buttonElement.previousElementSibling;
            if (!descriptionElement) return;

            const buttonRect = buttonElement.getBoundingClientRect();
            const descriptionRect = descriptionElement.getBoundingClientRect();

            if (buttonRect.top < descriptionRect.bottom) {
                buttonElement.style.marginTop = `${descriptionRect.bottom - buttonRect.top}px`;
            } else {
                buttonElement.style.marginTop = '0';
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="grid grid-cols-1">
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <AspectRatio ratio={4 / 3} style={{ maxWidth: 300, margin: 'auto' }}>
                    <Card
                        className="bg-dimmed w-full max-w-sm"
                        shadow="sm"
                        padding="md"
                        radius="md"
                        withBorder
                        style={{ cursor: 'pointer', width: "100%" }}
                    >
                        <div style={{ position: 'relative', paddingBottom: '75%' }}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <Group py={3} justify="space-between" style={{ flex: 1 }}>
                            <div style={{ flex: 1 }}>
                                <Text fw={500} size="sm" style={{ marginBottom: '5px' }}>
                                    {item.rating.rate}
                                    <Text size="xs" c="dimmed">{item.rating.count}x</Text>
                                    {item.title}
                                </Text>
                                <Text c="dimmed" fz="xs" style={{ marginBottom: '5px' }}>
                                    {item.category}
                                </Text>
                            </div>
                            <Button
                                size="xs"
                                variant="filled"
                                color="yellow"
                                onClick={() => onOpenModal?.(item)}
                                style={{ position: 'absolute', bottom: '10px', right: '10px' }}
                            >
                                Add
                            </Button>
                        </Group>
                    </Card>
                </AspectRatio>
            </div>
        </div>
    );
}


export default function ProductCardList({ productList }: { productList: ProductDto[] }) {
    return (
        <ul className="divide-y divide-gray-200" style={{ margin: '0', padding: '0' }}>
            {productList.map((productItem, index) => (
                <ProductCard key={productItem.id} item={productItem} />
            ))}
        </ul>
    );
}
