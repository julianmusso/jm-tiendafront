import React from 'react'

const CK = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY;
const CS = process.env.NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET;
const url = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL;

export const getAllProducts = async () => {

    const res = await fetch(url + 'products/?consumer_key='+CK+'&consumer_secret='+CS)
    const data = await res.json();

    console.log(url + 'products/?consumer_key=' + CK + '&consumer_secret=' + CS)

    console.log(data)

  return data;
}
