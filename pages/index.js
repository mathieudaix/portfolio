import Hero from '../components/home/Hero'
import Projects from '../components/home/Projects'
import Contact from '../components/home/Contact'

const HomePage = () => {
    return (
        <>
            <Hero />
            <section className="about" id="about">
                <div className="container">
                    <p>
                        I design products that combine creativity, technology and eco-design. I'm a creative front-end developer working at Kairos Agency based
                        in Bordeaux, France.
                    </p>
                </div>
            </section>
            <Projects />
            <Contact />
        </>
    )
}

export default HomePage
