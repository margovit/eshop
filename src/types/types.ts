export interface ProductDto {
    id: number;
    image: string;
    category: string;
    title: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}