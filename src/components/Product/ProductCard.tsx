import { Card, Image, Text, Group, Button, Modal, AspectRatio, rem } from '@mantine/core';
import { ProductDto } from '../../lib/dto/product';
import { ProductDetails } from './ProductDetails';

interface ProductCardProps {
    item: ProductDto;
    onOpenProductDetailsPage?: (product: ProductDto) => void;
}

export function ProductCard({ item, onOpenProductDetailsPage }: ProductCardProps) {
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
                                <Button size="xs" variant="filled" color="yellow" onClick={() => onOpenProductDetailsPage?.(item)}>
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