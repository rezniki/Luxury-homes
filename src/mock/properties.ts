import { Property } from "../types/property";
import Capsule_House_1 from "../img/1_Futuristic Capsule House_simple_compose.png";
import Capsule_House_2 from "../img/2_Futuristic Capsule House_simple_compose.png";

export const properties: Property[] = [
    {
        id: 1,
        title: 'Modern Villa in Los Angeles',
        price: 2150000,
        address: '123 Sunset Blvd',
        state: 'CA',
        image: Capsule_House_1,
        area: 380,
        bedrooms: 4,
        bathrooms: 3,
    },
    {
        id: 2,
        title: 'Luxury Estate in Miami',
        price: 3750000,
        address: '789 Ocean Drive',
        state: 'FL',
        image: Capsule_House_2,
        area: 500,
        bedrooms: 5,
        bathrooms: 4,
    },
];