import { Card, Image, Text, Group } from '@mantine/core';
import { useQuery } from "@tanstack/react-query";
import classes from './Products.module.css'


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
        <div className="products">
            {data.map((product: ProductDto) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <div className="product-info">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function ProductCard(product: ProductDto) {
    return (
        <Card withBorder padding="lg" className={classes.card}>
            <Image src={product.image} alt={product.title} height={100} />
            <Card.Section>
                <Group justify="space-between" mt="xl">
                    <Text fz="sm" fw={700} className={classes.title}>
                        {product.title}
                    </Text>
                    <Group gap={5}>
                        <Text fz="xs" c="dimmed">
                            {product.description}
                        </Text>
                    </Group>
                </Group>
                <Text mt="sm" mb="md" c="dimmed" fz="xs">
                    {product.category}
                </Text>
                <Card.Section className={classes.footer}>
                    <Text size="xs" color="dimmed">
                        Product Information:
                    </Text>
                    <div>
                        <Text fw={500} size="sm">
                            {product.description}
                        </Text>
                        <Text fw={500} size="sm">
                            Price: {product.price}
                        </Text>
                    </div>
                </Card.Section>
            </Card.Section>
        </Card>
    )
}