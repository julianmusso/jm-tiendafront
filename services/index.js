import React from 'react'

const CK = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY;
const CS = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET;
const url = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL;

export const getAllProducts = async () => {

    const res = await fetch(url + 'products/?consumer_key='+CK+'&consumer_secret='+CS)
    const data = await res.json();

  return data;
}

export const getProductDetails = async (id) => {

  const res = await fetch(url + 'products/'+id+'?consumer_key=' + CK + '&consumer_secret=' + CS)
  const data = await res.json();

  return data;
}

export const getCategories = async () => {

  const res = await fetch(url + 'products/categories/?consumer_key=' + CK + '&consumer_secret=' + CS)
  const data = await res.json();
  
  return data;
}