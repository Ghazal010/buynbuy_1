import { groq } from "next-sanity";

const bannerquery = groq`*[_type == "banner"]{
 ...
}|order(_createdAt asc)`;

const productquery = groq`*[_type == "product"]{
 ...
}|order(_createdAt asc)`;


const bestSellersQuery = groq`*[_type == 'product' && position 
== 'Bestsellers']{
 ...
}|order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == 'product' && position 
== 'New Arrival']{
 ...
}|order(_createdAt asc)`;

const bestRatingQuery = groq`*[_type == 'product' && rating 
== 'Best Rating']{
 ...
}|order(_createdAt asc)`;

const rowPriceQuery = groq`*[_type == 'product' && rowprice > price]{
    ...
   }|order(_createdAt asc)`;

export {bannerquery, productquery, bestSellersQuery, bestRatingQuery, newArrivalQuery, rowPriceQuery}