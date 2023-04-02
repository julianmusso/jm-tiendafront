import React from 'react'
import { Image, Box, Flex, Text, Heading, Button, Center, Stack, useBreakpointValue } from '@chakra-ui/react'

const ProductDetail = (product) => {
  const columnWidth = useBreakpointValue({ base: '100%', md: '40%' });
  const paddingMobile = useBreakpointValue({ base: "10", md: "auto", lg: "auto" });
  return (
    <>
      <Box maxW="container.xl" mx={paddingMobile}>


        <Box
          background='white'
          rounded='lg'
          shadow='sm'
          my='6'
          px='10'
        >

          <Flex
            direction={['column', 'column', 'row']}
            justifyContent="center"
            alignItems="center" py={10}>

            {/* ImageBox -> Product's image for the ProductDetail */}
            <Box w={['100%', '100%', '60%']}>
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

            {/* Product Detail -> Product's info: Title, Price, and Shop Buttons */}
            <Box mx={[10, 10, 10]} w={columnWidth}>
              <Heading py={6} fontSize='4xl' fontFamily='inter'>{product.name}</Heading>
              <Text pb={2} color='teal.600' fontSize='4xl' fontFamily='inter'>$ {product.price}</Text>
              <Stack direction="column" my={2} spacing={2}>
                <Button colorScheme="teal" size="lg" w="100%">
                  Agregar al carrito
                </Button>
                <Button colorScheme="gray" size="lg" variant="outline" w="100%">
                  Comprar
                </Button>
              </Stack>
              <Text fontFamily='inter' mt={4}>{product.short_description.replace(/<[^>]+>/g, '')}</Text>
            </Box>


          </Flex>
          <Box py={14} px='4'>
            <Text fontSize='lg' fontFamily='inter'>{product.description.replace(/<[^>]+>/g, '')}</Text>

          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ProductDetail