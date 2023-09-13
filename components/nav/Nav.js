import { useState } from 'react'
import Link from 'next/link'
import NavItem from './NavItem'

const Nav = () => {
    const [open, setOpen] = useState(false)

    const openCloseMenu = () => {
        setOpen(!open)
    }

    const navItems = [
        { label: 'Home', href: '/', start: 0.1 },
        { label: 'Projects', href: '/', start: 0.3 },
        { label: 'About', href: '/', start: 0.7 }
    ]

    const splitTextIntoSpans = (text, start) => {
        return text.split('').map((letter, index) => (
            <span style={{ transitionDelay: `${(index * 0.05 + start).toFixed(1)}s` }} key={index}>{letter}</span>
        ))
    }

    return (
        <nav className={open ? 'active' : null} >
            <div className="grid">
                <Link href="/">MathieuDaix.</Link>
                <p><sup>01 / </sup>Home</p>
                <div onClick={openCloseMenu}>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <div>
                        <ul>
                            {navItems.map((item, index) => (
                                <NavItem
                                    key={index}
                                    number={String(index + 1).padStart(2, '0')}
                                    href={item.href}
                                    classname={index === 0 ? 'active' : null}
                                    index={index}
                                >
                                    {splitTextIntoSpans(item.label, item.start)}
                                </NavItem>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
