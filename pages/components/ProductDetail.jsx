import React from 'react'
import { Image, Box, Flex, Text, Heading, Link, Button, Center, Stack, useBreakpointValue, HStack } from '@chakra-ui/react'

const ProductDetail = (product) => {
  const columnWidth = useBreakpointValue({ base: '100%', md: '40%' });
  return (
    <>

      {/* Begin of Breadcrumps 
      ex:  Home / Products / "Name of Product" */}

      <HStack maxW="container.xl" mx="auto">

        <Link href={`../`} color='teal.600'>Home</Link>
        <Text> / </Text>
        <Link href={`#`} color='teal.600'>Products</Link>
        <Text> / </Text>
        <Link href={`#`} color='teal.600'>{product.name}</Link>

      </HStack>

      {/* End of Breadcrumps.

      // ##################################################

      BEGIN of MAIN CONTAINER
      White and Rounded, the main container/box for the Product Details.

      */}

      <Box
        as='Main'
        maxW="container.xl" mx="auto"
        background='white'
        rounded='lg'
        shadow='sm'
        my='6'
        px='10'
      >

        {/* <----- BEGIN of FLEX for Product's Info -----> 
            This allows both sides to be displayed side by side.  */}

        <Flex
          direction={['column', 'column', 'row']}
          justifyContent="center"
          alignItems="center" py={10}>

          {/* <----- BEGIN of Product IMAGE -----> 
            60% Size - Centered, bordered, rounded, and responsive. */}

          <Box
            w={['100%', '100%', '60%']}
            as='product'
          >
            <Center>
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                p={2}
                width="100%"
                height="100%"
              />
            </Center>
          </Box>

          {/* <----- END of Product IMAGE -----> */



          /* <----- BEGIN of Product Details -----> 
            40% Size / 100% Mobile 
            Title (name), Price, and Shop Buttons */}

          <Box mx={[10, 10, 10]} w={columnWidth}>

            <Heading py={6} fontSize='4xl' fontFamily='inter'>{product.name}</Heading>
            <Text pb={2} color='teal.600' fontSize='4xl' fontFamily='inter'>$ {product.price}</Text>

            { /* Stack for the Shop Buttons */}
            <Stack direction="column" my={2} spacing={2}>

              <Button colorScheme="teal" size="lg" w="100%">
                Agregar al carrito
              </Button>

              <Button colorScheme="gray" size="lg" variant="outline" w="100%">
                Comprar
              </Button>

            </Stack>

            {/* Product' Short Description
                Also, useful space for special details like Shipping Methods. */}

            <Text fontFamily='inter' mt={4}>{product.short_description.replace(/<[^>]+>/g, '')}</Text>

          </Box>
          {/* <----- END of Product Details -----> */}


        </Flex>
        {/* <----- END of FLEX for Product's Info -----> */



        /* Zone for the Large Description or more details */}
        <Box py={14} px='4'>
          <Text fontSize='lg' fontFamily='inter'>{product.description.replace(/<[^>]+>/g, '')}</Text>

        </Box>{/* 
          END of Zone. */}


      </Box>
      {/* ###### END OF PRODUCT DETAILS ######



      // ##################################################

        BEGIN of RELATED PRODUCTS
        White and Rounded, the main container/box for the Product Details.

      // */}




      {/* END OF RELATED PRODUCTS */}

    </>
  )
}

export default ProductDetail