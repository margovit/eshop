import { Card, Image, Text, Group, Button } from '@mantine/core';
import { useQuery } from "@tanstack/react-query";



interface ProductDto {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    image: string;
}

function fetchProducts() {

    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}

export function Products() {
    const { isPending, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isPending) {
        return <span>Loading</span>
    }

    return (
    <div className="flex flex-wrap justify-around items-start">
    {data && data.map((product: ProductDto) => (
        <ProductCard key={product.id} item={product} />
        ))}
        </div>
    )
}

export function ProductCard({ item }: { item: ProductDto }) {
    return (
        <div className="flex flex-wrap justify">
            <div className="card-wrapper">
            <Card className="bg-dimmed w-64 h-64" shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section withBorder inheritPadding py="xs">
                    <Image className="w-20 h-20" src={item.image} alt={item.title} />
                    <Group justify="space-between" >
                        <Text fz="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Group gap={5}>
                            <Text fz="xs" c="dimmed">
                                {item.description}
                            </Text>
                        </Group>
                    </Group>
                    <Text mt="sm" mb="md" c="dimmed" fz="xs">
                        {item.category}
                    </Text>
                    <Card.Section>
                        <Text size="xs" color="dimmed">
                            Product Information:
                        </Text>
                        <Text fw={500} size="sm">
                            {item.description}
                        </Text>
                        <Text fw={500} size="sm">
                            Price: {item.price}
                        </Text>
                        <Button variant="filled" color="gray" size="xs" radius="lg">Buy</Button>
                    </Card.Section>
                </Card.Section>
            </Card>
        </div>
    </div >      
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
