import { Box, ButtonGroup, Container, IconButton, Stack, Text, Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Logo } from './Logo'

const Footer = () => {

    return (
        <>
            <Box as="footer" bg='gray.100' boxShadow="sm">
                    <Container
                        maxW="container.xl"
                        py={{
                            base: '12',
                            lg: '16',
                        }}
                        mt="10"
                        mx="auto"
                    >
                        <Stack
                            spacing={{
                                base: '4',
                                md: '5',
                            }}
                        >
                            <Stack justify="space-between" direction="row" align="center">
                                <Heading>TiendaFront</Heading>
                                <ButtonGroup variant="ghost">
                                    <IconButton
                                        as="a"
                                        href="#"
                                        aria-label="LinkedIn"
                                        icon={<FaLinkedin fontSize="1.25rem" />}
                                    />
                                    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                                    <IconButton
                                        as="a"
                                        href="#"
                                        aria-label="Twitter"
                                        icon={<FaTwitter fontSize="1.25rem" />}
                                    />
                                </ButtonGroup>
                            </Stack>
                            <Text fontSize="sm" color="subtle">
                                &copy; {new Date().getFullYear()} OneTech, LLC. Todos los derechos reservados.
                            </Text>
                        </Stack>
                    </Container>
                </Box>
        </>)
}

export default Footer;