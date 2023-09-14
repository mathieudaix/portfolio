import Link from 'next/link'

const NavItem = ({ number, classname, href, children }) => {
    return (
        <>
            <sup>{number} / </sup>
            <Link className={classname} href={href}>{children}</Link>
        </>
    )
}

export default NavItem
