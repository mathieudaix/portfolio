import Scene from '../components/scene/Scene'
import { useEffect } from 'react'
import Image from 'next/image'

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

            <section className='projects'>
                <div className='container'>
                    <h2>Projects</h2>

                    <div className='grid'>
                        <div>
                            <Image src="/images/project.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div>
                            <Image src="/images/project.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
