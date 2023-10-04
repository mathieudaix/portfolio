import { useRef, useEffect } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useRafLoop } from 'react-use'

const MarqueeItem = ({ content, speed }) => {
    const item = useRef(null)
    const rect = useRef({})
    const x = useRef(0)

    const [width, height] = useWindowSize()

    const setX = () => {
        if (!item.current || !rect.current) return
        const xPercentage = (x.current / rect.current.width) * 100
        if (xPercentage < -100) x.current = 0
        if (xPercentage > 0) x.current = -rect.current.width
        item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`

        if (x.current < -rect.current.width) x.current = 0
        if (x.current > 0) x.current = -rect.current.width
        item.current.style.transform = `translate3d(${x.current}px, 0, 0)`
    }

    useEffect(() => {
        rect.current = item.current.getBoundingClientRect()
    }, [width, height])

    const buffer = useRef(0)

    const loop = (e) => {
        x.current -= speed.get()
        setX()

        const delta = (e - buffer.current) / 1000
        const c = Math.max(1 / 60 / delta, 1)
        buffer.current = e
        x.current -= speed.get() / c
        setX()
    }

    useRafLoop(loop, true)

    return (
        <div className="item" ref={item}>
            {content}
        </div>
    )
}

export default MarqueeItem