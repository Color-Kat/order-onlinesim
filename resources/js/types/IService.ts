import {ICountry} from "@/types/ICountry.ts";

export interface IService {
    id: number;
    name: string;
    short_name: string;
    image: string;
    isActive?: boolean;

    countries: {
        [key: string]: {
            price: number,
            availablePhones: number;
        } & ICountry
    }
}