import {ICountry} from "@/types/ICountry.ts";

export type ServiceCountryType = {
    pivot: {
        price: number,
        availablePhones: number;
    }
} & ICountry;

export interface IService {
    id: number;
    name: string;
    short_name: string;
    image: string;
    is_active: boolean; // For db

    countries: ServiceCountryType[];

    isSelected?: boolean; // For user select
}