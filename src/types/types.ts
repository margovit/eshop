export interface ProductDto {
    id: number;
    image: string;
    category: string;
    title: string;
    description: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}