import { ReactLenis } from '@studio-freight/react-lenis'
import Nav from './nav/Nav'

const Layout = ({ children }) => {
    return (
        <ReactLenis root>
            <main>
                <Nav />
                {children}
            </main>
        </ReactLenis>
    )
}

export default Layout
