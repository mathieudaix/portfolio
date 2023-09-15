import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import { visible, hidden } from '../../utils/nav/anim'

const NavAnimation = (isOpen) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        const animations = isOpen ? visible : hidden

        animate(animations)
    }, [isOpen])

    return scope
}

export default NavAnimation
