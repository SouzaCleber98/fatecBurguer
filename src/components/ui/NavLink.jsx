function NavLink({ links }) {
    const createLinks = links.map(link => (
        <a key={link.href} href={link.href} >
            {link.label}
        </a>
    ))

    return (
        <>
            {createLinks}
        </>
    );
}

export default NavLink;
