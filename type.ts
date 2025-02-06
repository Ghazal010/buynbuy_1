export interface bannersData{
_id:string;
type:string;
createdAt:string;
updatedAt:string;
rev:string;
image:{
    _type:string;
    asset:{
        _ref:string;
        _type:string;
    }
}
title:string;
subTitle:string;
price:number;
description:string;
}

type CustomImageAsset = {
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    }
}

type CustomSlug = {
    _type:"slug";
    current:string;
}

type Category = {
    _type:"category";
    _id:string;
    name:string;
}

export interface productsData {
    title: string;
    image: CustomImageAsset;
    quantity: number;
    price: number;
    category: string[]; //category[]
    slug: CustomSlug;
    _createdAt: string;
    description: string;
    _updatedAt: string;
    rating: number;
    brand: string;
    _type: "product";
    _id: string;
    postion: string;
    rowprice: number

}
interface UserInfo{
    _id:string,
    name:string,
    email:string,
    
}

export interface StoreState {
    buynbuy: {
        cart: productsData[];
        wishlist: productsData[];
        userInfo: UserInfo | null;
    }
  }