import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const Nav = () => {
    const [open, setOpen] = useState(false)

    const animIconTop = {
        visible: { y: '0.2rem', rotate: 45 },
        hidden: { y: 0, rotate: 0 }
    }

    const animIconBottom = {
        visible: { y: '-0.2rem', rotate: -45 },
        hidden: { y: 0, rotate: 0 }
    }

    const animMenu = {
        visible: { y: 0 },
        hidden: { y: '-100%' }
    }

    const animMenuBg = {
        visible: { y: 0 },
        hidden: { y: '100%' }
    }

    const animLink = {
        visible: { y: 0 },
        hidden: { y: '100%' }
    }

    const animLine = {
        visible: { scaleX: 1 },
        hidden: { scaleX: 0 }
    }

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/' },
        { label: 'About', href: '/' }
    ]

    return (
        <motion.nav animate={open ? 'visible' : 'hidden'} initial="hidden">
            <div className="grid">
                <Link href="/">MathieuDaix.</Link>

                <p><sup>01 / </sup>Home</p>

                <div onClick={() => setOpen(!open)}>
                    <motion.span transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.4 }} variants={animIconTop}></motion.span>
                    <motion.span transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.4 }} variants={animIconBottom}></motion.span>
                </div>

                <motion.div transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.8 }} variants={animMenu}>
                    <motion.div transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.8 }} variants={animMenuBg}>
                        <motion.ul
                            variants={{
                                visible: { transition: { staggerChildren: 0.15 } }
                            }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li key={index} transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.8 }} variants={animLink}>
                                    <sup>{String(index + 1).padStart(2, '0')} / </sup>
                                    <Link transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.8 }} variants={animLink} className={index === 0 ? 'active' : null} href={item.href}>{item.label}</Link>
                                    {index === 0 && <motion.span transition={{ type: 'tween', ease: [0.265, 0.84, 0.44, 1], duration: 0.8, delay: 0.5 }} variants={animLine}></motion.span>}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Nav
