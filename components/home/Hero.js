import Scene from '../scene/Scene'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const Hero = () => {
    const hero = useRef()
    const heroGrid = useRef()

    useEffect(() => {
        const handleScroll = () => {
            hero.current.style.transform = `translateY(${window.scrollY / 4}px)`
            heroGrid.current.style.opacity = 1.2 - (window.scrollY / 1000)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className='hero' ref={hero}>
            <div className='model'>
                <Scene />
            </div>

            <div className='grid' ref={heroGrid}>
                <div>
                    <h1>Hello,<br />I'm Mathieu Daix</h1>
                    <p>I create an experience through<br />every production I build.</p>
                    <a className='btn' href="#projects">Scroll to discover projects</a>
                </div>

                <div className='right'>
                    <p>Front-end creative developer</p>
                    <span>-</span>
                    <Link href='' target='_blank' rel='nofollow'>LinkedIn</Link>
                    <span>-</span>
                    <Link href='' target='_blank' rel='nofollow'>GitHub</Link>
                </div>
            </div>
        </header>
    )
}

export default Hero
