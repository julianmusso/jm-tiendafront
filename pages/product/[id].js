import React from "react";
import { getProductDetails, getCategories, getAllProducts } from "@/services";
import ProductDetail from "../components/ProductDetail";


const PostDetails = ({ product }) => {
    return (
        <>
            <ProductDetail {...product} />
        </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getProductDetails(params.id)

    return {
        props: { product: data }
    }
}

export async function getStaticPaths() {
    const products = await getAllProducts();

    return {
        paths: products.map((product) => ({ params: { id: product.id.toString() } })),
        fallback: false,
    }
}