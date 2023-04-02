import React from 'react'
import Image from 'next/image'
import { Container, Box, Stack, StackDivider, Divider, Card, CardHeader, CardBody, CardFooter, Text, Heading, Button, ButtonGroup, SimpleGrid } from '@chakra-ui/react'

const ProductCard = ({ product }) => {

    return (
        
        <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "33.33%" }} p="4">
                <Card maxW='sm' boxShadow='md' padding={2}>
                    <CardBody>
                        <Image
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            borderradius='lg'
                            width='230'
                            height='155'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{product.name}</Heading>
                            <Text fontFamily='inter'>
                            {(product.short_description.replace(/<[^>]+>/g, '')) }
                            </Text>
                        <Text color='teal.600' fontSize='2xl' fontFamily='inter'>
                                $ {product.price }
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='teal'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='teal'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
        </Box>
    )
}

export default ProductCard