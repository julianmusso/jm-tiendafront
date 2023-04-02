import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ProductCard, SideBar } from './components'
import { getAllProducts } from '@/services'
import { Box, Container, Flex, Grid } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>TiendaFront</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <Flex> for the both sides function */}
      <Flex direction={['column', 'column', 'row']} minH='100vh' maxW="container.xl" mx="auto">

        {/* SideBar: Categories & Brand Lists */}

        <Box w={['100%', '100%', '20%']}>
          <SideBar />
        </Box>

        {/* ProductsSide: List of all Products, builded on ProductsDetail component */}

        <Box w={['100%', '100%', '80%']}>
          <Flex flexWrap="wrap" justifyContent="space-between">
            {products.map((product) => <ProductCard product={product} key={product.id} />)}
          </Flex>
        </Box>

        {/* End of DoubleSide (</Flex>) */}
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const products = (await getAllProducts()) || []

  return {
    props: { products }
  }
}