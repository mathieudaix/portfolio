import Link from 'next/link'
import { menu } from '../../utils/nav/menu'

const Nav = ({ isOpen, setIsOpen }) => {
    return (
        <nav>
            <div className="grid">
                <Link href="/">MathieuDaix.</Link>

                <p><sup>01 / </sup>Home</p>

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
