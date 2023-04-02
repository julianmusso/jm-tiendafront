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
      <Container maxW="container.xl" p={0}>
        <Flex direction={['column', 'column', 'row']} minH='100vh' maxW="container.xl" mx="auto">

          <Box w={['100%', '100%', '20%']}>
            {/* Aquí iría el código del SideBar */}
            <SideBar />
          </Box>
          <Box w={['100%', '100%', '80%']}>
            <Flex>
              <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={0}>
                {products.map((product) => <ProductCard product={product} key={product.id} />)}
              </Grid>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const products = (await getAllProducts()) || []

  return {
    props: { products }
  }
}