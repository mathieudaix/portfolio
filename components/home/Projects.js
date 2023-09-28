import { useEffect, useRef } from 'react'
import Ukiyo from 'ukiyojs'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    const project1Image = useRef()
    const project2 = useRef()
    const project2Image = useRef()

    useEffect(() => {
        new Ukiyo('.ukiyo', {
            scale: 1.1,
            speed: 1.5,
        })

        const handleScroll = () => {
            project2.current.style.transform = `translateY(-${window.scrollY / 6}px)`
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
                    <div className='project'>
                        <div className='image'>
                            <Image className='ukiyo' ref={project1Image} src="/images/project-ffbad.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>FFBad</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project' ref={project2}>
                        <div className='image'>
                            <Image className='ukiyo' ref={project2Image} src="/images/project-kairos-agency.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>Kairos Agency</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                </div>
                <a className='btn' href="/projects">View all</a>
            </div>
        </section>
    )
}

export default Projects
