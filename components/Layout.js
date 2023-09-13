import Nav from './nav/Nav'

const Layout = ({ children }) => {
    return (
        <main>
            <Nav />
            {children}
        </main>
    )
}

export default Layout
