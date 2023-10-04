import { ReactLenis } from '@studio-freight/react-lenis'
import { useState } from 'react'
import Nav from './nav/Nav'
import NavAnimation from '../components/nav/NavAnimation'
import { Analytics } from '@vercel/analytics/react'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const scope = NavAnimation(isOpen)

    return (
        <ReactLenis root>
            <main ref={scope} className={isOpen ? 'noscroll' : null}>
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
                {children}
            </main>
            <Analytics />
        </ReactLenis>
    )
}

export default Layout
