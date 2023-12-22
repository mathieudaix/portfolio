import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Marquee from '../marquee/Marquee'

const Contact = () => {
    const stickerRefs = useRef([])
    const [stickers, setStickers] = useState([])

    const words = ['hello', 'holà', 'ciao']

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length)
        return words[randomIndex]
    }

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 21) - 10
    }

    const addSticker = event => {
        const mouseX = event.clientX
        const mouseY = event.clientY

        const newSticker = {
            x: mouseX,
            y: mouseY,
            word: getRandomWord(),
            rotation: getRandomRotation(),
            createdAt: Date.now(),
        }

        stickerRefs.current.push(React.createRef())

        setStickers(prevStickers => [...prevStickers, newSticker])
    }

    useEffect(() => {
        const removeStickers = () => {
            const currentTime = Date.now()
            setStickers(prevStickers =>
                prevStickers
                    .map(sticker => {
                        const age = currentTime - sticker.createdAt
                        const isOld = age > 1000

                        return {
                            ...sticker,
                            opacity: isOld ? 0 : 1 - age / 1000,
                        }
                    })
                    .filter(sticker => sticker.opacity > 0)
            )
        }

        const intervalId = setInterval(removeStickers, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <section className="contact" onClick={e => addSticker(e)}>
            <Marquee />
            <Link href="mailto:contact@mathieudaix.fr">contact@mathieudaix.fr</Link>
            {stickers.map((sticker, index) => (
                <div
                    key={index}
                    ref={stickerRefs.current[index]}
                    className="sticker"
                    style={{
                        top: sticker.y,
                        left: sticker.x,
                        opacity: sticker.opacity || 1,
                        transform: `rotate(${sticker.rotation}deg) translate(-50%, -50%)`,
                    }}
                >
                    <motion.p
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2, type: 'spring', stiffness: 200 }}
                    >
                        {sticker.word}
                    </motion.p>
                </div>
            ))}
        </section>
    )
}

export default Contact
