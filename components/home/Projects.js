import { useEffect, useRef } from 'react'
import Ukiyo from 'ukiyojs'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    const project1 = useRef()
    const project1Image = useRef()

    const project2 = useRef()
    const project2Image = useRef()

    useEffect(() => {
        new Ukiyo('.ukiyo', {
            scale: 1.1,
            speed: 1.5,
        })

        const handleScroll = () => {
            project1.current.style.transform = `translateY(-${window.scrollY / 10}px)`
            project2.current.style.transform = `translateY(-${window.scrollY / 4}px)`
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <p><sup>02 / </sup>Projects</p>
                <h2>Featured projects</h2>

                <div className='grid'>
                    <div className='project' ref={project1}>
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

                <h2>All projects</h2>

                <div className='list'>
                    <div className='project'>
                        <h3>Kairos Blue</h3>
                        <p>2023</p>
                        <Link href="/">⮠</Link>
                    </div>
                    <div className='project'>
                        <h3>i-Sea</h3>
                        <p>2023</p>
                        <Link href="/">⮠</Link>
                    </div>
                    <div className='project'>
                        <h3>Ubique Architecture</h3>
                        <p>2023</p>
                        <Link href="/">⮠</Link>
                    </div>
                    <div className='project'>
                        <h3>Mon Service RH</h3>
                        <p>2022</p>
                        <Link href="/">⮠</Link>
                    </div>
                    <div className='project'>
                        <h3>Laura Van Puymbroeck</h3>
                        <p>2020</p>
                        <Link href="/">⮠</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
