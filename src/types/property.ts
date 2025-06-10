export interface Property {
    id: number;
    title: string;
    price: number;
    address: string;
    state: string;
    image: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    description?: string;
}