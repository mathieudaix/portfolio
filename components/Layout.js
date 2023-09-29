import { ReactLenis } from '@studio-freight/react-lenis'
import { useState } from 'react'
import Nav from './nav/Nav'
import NavAnimation from '../components/nav/NavAnimation'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const scope = NavAnimation(isOpen)

    return (
        <ReactLenis root>
            <main ref={scope}>
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
                {children}
            </main>
        </ReactLenis>
    )
}

export default Layout
