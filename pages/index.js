import Scene from '../components/scene/Scene'

const Home = () => {
    return (
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
    )
}

export default Home
