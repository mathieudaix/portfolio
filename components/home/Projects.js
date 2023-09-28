import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    const projectRight = useRef()

    useEffect(() => {
        const handleScroll = () => {
            projectRight.current.style.transform = `translateY(-${window.scrollY / 6}px)`
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <section className='projects'>
            <div className='container'>
                <h2>Featured projects</h2>
                <div className='grid'>
                    <div>
                        <Image src="/images/project.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        <div>
                            <h3>Project 1</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div ref={projectRight}>
                        <Image src="/images/project.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        <div>
                            <h3>Project 1</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
