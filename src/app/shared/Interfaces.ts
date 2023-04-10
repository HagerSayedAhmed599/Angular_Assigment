export enum DiscountOffers{
    NoDiscount="NoDiscount",
    Ten= "0.1", 
    FiveTen="15%"
}
export interface Iproduct{
    id:number;
    name:string;
    quantity:number;
    price:number;
    img:string;
}
export interface Icategory{
    id:number;
    name:string;
}
export interface Iusers{
    name:string;
    userName:string;
    email:string;
}
export interface Iposts{
    id:number;
    title:string;
    body:string;
}
export interface Icomments{
    name:string;
    email:string;
    body:string;
}
