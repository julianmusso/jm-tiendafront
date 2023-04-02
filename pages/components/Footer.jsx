import { Box, ButtonGroup, Container, IconButton, Stack, Text, Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    return (
        <>
            <Box as="footer" bg='gray.200' boxShadow="sm">
                <Container
                    maxW="container.xl"
                    py={{
                        base: '12',
                        lg: '16',
                    }}
                    mt="0"
                    mx="auto"
                >
                    <Stack spacing={ {base: '4',md: '5',} }>

                        <Stack justify="space-between" direction="row" align="center">
                            <Heading fontFamily='inter'>TiendaFront</Heading>

                            <ButtonGroup variant="ghost">
                                <IconButton
                                    as="a"
                                    href="https://www.linkedin.com/in/julianmartinez4697/"
                                    aria-label="LinkedIn"
                                    icon={<FaLinkedin fontSize="1.25rem" />}
                                />
                                <IconButton 
                                    as="a" 
                                    href="https://github.com/julianmusso" 
                                    aria-label="GitHub" 
                                    icon={<FaGithub fontSize="1.25rem" />} />
                                <IconButton
                                    as="a"
                                    href="https://twitter.com/julianmusso"
                                    aria-label="Twitter"
                                    icon={<FaTwitter fontSize="1.25rem" />}
                                />
                            </ButtonGroup>
                        </Stack>
                        <Text fontSize="sm" color="subtle" fontFamily='inter'>
                            &copy; {new Date().getFullYear()} Julián Musso Martinez. Todos los derechos reservados.
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </>)
}

export default Footer;