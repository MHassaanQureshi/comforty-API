export type Product = {
    _id:string,
    title:string,
    description:string,
    price:number,
    image_url:string,
    inventory:number,
      
      priceWithoutDiscount:number,
      tags:[],
      badge:string,
}

export type Category = {
    _id:string,
    title:string,
    image_url:string,
}