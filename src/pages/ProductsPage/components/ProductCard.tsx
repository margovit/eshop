import { Card, Image, Text, Button, Flex } from '@mantine/core';
import { ProductDto } from '../../../lib/dto/product';


interface ProductCardProps {
    item: ProductDto;
    onAddToCart?: (product: ProductDto) => void;
}

export function ProductCard({ item, onAddToCart }: ProductCardProps) {
    return (
        <Card shadow="sm" padding="md" radius="md" withBorder style={{ cursor: 'pointer', marginBottom: 20 }}>
                <Image src={item.image} alt={item.title} className="w-full h-auto" />
                <Flex
                    direction="row"
                    mt="sm"
                    mih={50}
                    gap="xs"
                    justify="flex-start"
                    align="flex-start"
                    wrap="wrap"
                >
                    <Flex direction="column" mt="md">
                        <Text size="sm" className="weight-600">
                            {item.title}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {item.category}
                        </Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text size="xs" color="dimmed">
                            {item.rating.rate} ({item.rating.count} reviews)
                        </Text>
                        <Button variant="filled" color="yellow" size="xs" onClick={() => onAddToCart && onAddToCart(item)} style={{ margin: '0.5rem' }}>
                            Add
                        </Button>
                    </Flex>
                </Flex>
        </Card>

    );
}