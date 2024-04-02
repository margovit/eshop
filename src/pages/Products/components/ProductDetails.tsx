import { Card, Image, Text, Button } from "@mantine/core";
import { ProductDto } from "../../../lib/dto/product";

export function ProductDetails({ product }: { product: ProductDto }) {
  return (
      <Card>
          <Image src={product.image} alt={product.title} className="w-full h-auto" />
          <Card.Section>
              <Text size="xs" color="dimmed">
                  Product Information:
              </Text>
              <Text fw={500} size="sm">
                  {product.description}
              </Text>
              <Text fw={500} size="sm">
                  Price: {product.price}
              </Text>
              <Button variant="filled" color="gray" size="xs" radius="lg">Buy</Button>
          </Card.Section>
      </Card>
  );
}