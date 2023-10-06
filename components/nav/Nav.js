import Link from 'next/link'
import { menu } from '../../utils/nav/menu'

const splitTextIntoSpans = (text) => {
    return text.split('').map((letter, index) => (
        <span style={{ transitionDelay: `${(index * 0.05).toFixed(1)}s` }} key={index}>{letter}</span>
    ))
}

const Nav = ({ isOpen, setIsOpen }) => {
    function animHoverLogo() {

    }

    return (
        <nav>
            <div className="grid">
                <Link href="/" onMouseEnter={animHoverLogo}>{splitTextIntoSpans('mathieudaix.')}</Link>

                <p><sup>01 / </sup>Intro</p>

                <div className='icon' onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                </div>

                <div className='menu'>
                    <div>
                        <ul>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <sup>{String(index + 1).padStart(2, '0')} / </sup>
                                    <Link className={index === 0 ? 'active' : null} href={item.href}>{item.label}</Link>
                                    {index === 0 && <span></span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <span className='overlay' onClick={() => setIsOpen(!isOpen)}></span>
            </div>
        </nav>
    )
}

export default Nav
