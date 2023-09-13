import Scene from '../components/scene/Scene'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const title = document.querySelector('.hero')
            title.style.transform = `translateY(${window.scrollY / 4}px)`
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <>
            <header className='hero'>
                <div className='model'>
                    <Scene />
                </div>
                <div className='grid'>
                    <h1>Hello,<br />I'm Mathieu Daix</h1>
                    <p>I create an experience through<br />every production I build.</p>
                    <a className='btn' href="/projects">Discover my projects</a>
                </div>
            </header>

            <section>
                <p>lorem</p>
            </section>
        </>
    )
}

export default Home
