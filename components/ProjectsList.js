import Image from 'next/image'
import Link from 'next/link'

const ProjectsList = () => {
    return (
        <section className='projects_list'>
            <div className='container'>
                <h1>Discover all projects</h1>
                <div className='grid'>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-ffbad.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>FFBad</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-kairos-agency.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>Kairos Agency</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-ffbad.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>i-Sea</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-kairos-agency.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>Ubique</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-ffbad.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>Mon Service RH</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='image'>
                            <Image src="/images/project-kairos-agency.jpg" alt="Project" width={1} height={1} sizes="100vw" quality="70" />
                        </div>
                        <div className='content'>
                            <h3>Laura Van Puymbroeck</h3>
                            <Link href="/">⮠</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsList
