import Footer from './footer';
import NavBar from './nav-bar';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
        
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;