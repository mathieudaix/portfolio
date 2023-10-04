import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import normalizeWheel from 'normalize-wheel'
import { useRafLoop } from 'react-use'
import MarqueeItem from './MarqueeItem'

const _ = {
    content: "Send an email Send an email ",
    speed: 2,
    threshold: 0.014,
    wheelFactor: 1.2,
    dragFactor: 1.2
}

const Marquee = () => {
    const marquee = useRef(null)
    const slowDown = useRef(false)
    const isScrolling = useRef(false)

    const x = useRef(0)

    const speed = useSpring(_.speed, {
        damping: 40,
        stiffness: 90,
        mass: 5
    })

    const onWheel = (e) => {
        const normalized = normalizeWheel(e)
        x.current = normalized.pixelY * _.wheelFactor

        window.clearTimeout(isScrolling.current)
        isScrolling.current = setTimeout(function () {
            speed.set(_.speed)
        }, 30)
    }

    const loop = () => {
        if (slowDown.current || Math.abs(x.current) < _.threshold) return
        x.current *= 0.66
        if (x.current < 0) {
            x.current = Math.min(x.current, 0)
        } else {
            x.current = Math.max(x.current, 0)
        }
        speed.set(_.speed + x.current)
    }

    useRafLoop(loop, true)

    return (
        <>
            <motion.div className="marquee" ref={marquee} onWheel={onWheel}>
                <MarqueeItem content={_.content} speed={speed} />
                <MarqueeItem content={_.content} speed={speed} />
            </motion.div>
        </>
    )
}

export default Marquee