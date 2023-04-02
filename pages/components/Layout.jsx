import { Box } from '@chakra-ui/react'
import { Header, Footer } from '.'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box
                background="gray.100" p={10}>
                {children}
                </Box>
            <Footer />
        </>
    )
}

export default Layout