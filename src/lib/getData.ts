import {client} from '@/sanity/lib/client';
import {bannerquery, productquery, bestSellersQuery, newArrivalQuery, rowPriceQuery} from './query';

export const revalidate = 0;

const getBannersData = async () => {
    const bannersData = await client.fetch(bannerquery);
    return bannersData;
}

const getProductsData = async () => {
    const productsData = await client.fetch(productquery);
    return productsData;
}

const getBestSellersData = async () => {
    const bestSellersData = await client.fetch(bestSellersQuery);
    return bestSellersData;
}

const getNewArrivalData = async () => {
    const newArrivalData = await client.fetch(newArrivalQuery);
    return newArrivalData;
}

const getRowPriceData = async () => {
    const rowPriceData = await client.fetch(rowPriceQuery);
    return rowPriceData;
}


export {getBannersData, getProductsData, getBestSellersData, getNewArrivalData, getRowPriceData}