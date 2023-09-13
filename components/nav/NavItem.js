import Link from 'next/link'

const NavItem = ({ number, classname, href, children }) => {
    return (
        <li>
            <sup>{number} / </sup>
            <Link className={classname} href={href}>{children}</Link>
        </li>
    )
}

export default NavItem
