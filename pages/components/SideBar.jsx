import { Box, Container, Card, CardBody, Heading, Divider, Link } from '@chakra-ui/react'

const SideBar = () => {
    return (
        <>
            <Container mr={2} p={10} pl={0}>
                <Card minW="container" maxW='xl' boxShadow='md' padding={0}>
                    <CardBody>
                        <Box p='4'>
                            <Heading size='md' mb='4'>
                                Categorías
                            </Heading>
                            <Box color='teal.600'>
                                <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ color: 'teal.400', textDecoration: 'none' }}>
                                    Computadoras
                                </Link>
                                <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ color: 'teal.400', textDecoration: 'none' }}>
                                    Notebooks
                                </Link>
                                <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ color: 'teal.400', textDecoration: 'none' }}>
                                    Teléfonos
                                </Link>
                            </Box>
                            <Divider my='4' />
                            <Box>
                                <Heading size='md' mb='4'>
                                    Marcas
                                </Heading>
                                <Box color='teal.600'>
                                    <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ textDecoration: 'none' }}>
                                        Lenovo
                                    </Link>
                                    <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ textDecoration: 'none' }}>
                                        Asus
                                    </Link>
                                    <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ textDecoration: 'none' }}>
                                        Dell
                                    </Link>
                                    <Link display='block' py='2' fontWeight='medium' fontSize='lg' _hover={{ textDecoration: 'none' }}>
                                        EXO
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default SideBar