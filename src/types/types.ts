export interface ProductDto {
    id: string;
    image: string;
    category: string;
    title: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}