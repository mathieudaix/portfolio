import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { animIconTop, animIconBottom, animMenu, animMenuBg, animLink, animLine } from '../../utils/nav/anim'
import { transition } from '../../utils/utils'
import { menu } from '../../utils/nav/menu'

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <motion.nav animate={open ? 'visible' : 'hidden'} initial="hidden">
            <div className="grid">
                <Link href="/">MathieuDaix.</Link>

                <p><sup>01 / </sup>Home</p>

                <div onClick={() => setOpen(!open)}>
                    <motion.span transition={transition(0.4)} variants={animIconTop}></motion.span>
                    <motion.span transition={transition(0.4)} variants={animIconBottom}></motion.span>
                </div>

                <motion.div transition={transition(0.8)} variants={animMenu}>
                    <motion.div transition={transition(0.8)} variants={animMenuBg}>
                        <motion.ul transition={{ staggerChildren: 0.15 }}>
                            {menu.map((item, index) => (
                                <motion.li key={index} transition={transition(0.8)} variants={animLink}>
                                    <sup>{String(index + 1).padStart(2, '0')} / </sup>
                                    <Link className={index === 0 ? 'active' : null} href={item.href}>{item.label}</Link>
                                    {index === 0 && <motion.span transition={transition(0.8, 0.5)} variants={animLine}></motion.span>}
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
