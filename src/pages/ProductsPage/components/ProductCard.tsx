import { Card, Image, Text, Group, Button, AspectRatio } from '@mantine/core';
import { ProductDto } from '../../../lib/dto/product';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    item: ProductDto;
    onAddToCart?: (product: ProductDto) => void;
}

export function ProductCard({ item, onAddToCart }: ProductCardProps) {
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
                                <Button
                                    size="xs"
                                    variant="filled"
                                    color="yellow"
                                    component={Link}
                                    to="/cart"
                                    onClick={() => onAddToCart && onAddToCart(item)}
                                >
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