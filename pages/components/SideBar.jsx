import { Box, Container, Card, CardBody, Heading, Text, Divider, Link } from '@chakra-ui/react'

const SideBar = () => {
    return (
        <>
            <Container mr={2} p={10} pl={0}>
                <Card minW="container" maxW='xl' boxShadow='md' padding={0}>
                    <CardBody>
                        <Box p='4'>
                            <Heading size='md' mb='4'>
                                Categories
                            </Heading>
                            <Box>
                                <Link display='block' py='2' fontWeight='medium'>
                                    Category 1
                                </Link>
                                <Link display='block' py='2' fontWeight='medium'>
                                    Category 2
                                </Link>
                                <Link display='block' py='2' fontWeight='medium'>
                                    Category 3
                                </Link>
                            </Box>
                            <Divider my='4' />
                            <Box>
                                <Text fontWeight='bold'>Brands:</Text>
                                <Box>
                                    <Link display='block' py='2' fontWeight='medium'>
                                        Brand 1
                                    </Link>
                                    <Link display='block' py='2' fontWeight='medium'>
                                        Brand 2
                                    </Link>
                                    <Link display='block' py='2' fontWeight='medium'>
                                        Brand 3
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