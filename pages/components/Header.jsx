import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Heading,
    HStack,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    })
    return (
        <Box
            as="header"
            pb={{
                base: '0',
                md: '0',
            }}
        >
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container
                    maxW="container.xl"
                    py={{
                        base: '6',
                        lg: '6',
                    }}
                    mx="auto"
                >
                    <HStack spacing="10" justify="space-between">
                        <Heading>TiendaFront</Heading>
                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">
                                <ButtonGroup variant="link" spacing="8">
                                    {['Inicio', 'Tienda', 'Categorias', 'Acerca de'].map((item) => (
                                        <Button key={item}>{item}</Button>
                                    ))}
                                </ButtonGroup>
                                <HStack spacing="3">
                                    <Button variant="outline">Log In</Button>
                                    <Button colorScheme='teal' variant='solid'>Registrarse</Button>
                                </HStack>
                            </Flex>
                        ) : (
                            <IconButton
                                variant="ghost"
                                icon={<FiMenu fontSize="1.25rem" />}
                                aria-label="Open Menu"
                            />
                        )}
                        </HStack>
                </Container>
            </Box>
        </Box>
    )
}

export default Header