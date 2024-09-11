import type { StaticImageData } from "next/image";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    img: StaticImageData;
    amount: number;
}