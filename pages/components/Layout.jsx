import { Box, Flex } from '@chakra-ui/react'
import { Header, SideBar, Footer } from '.'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout