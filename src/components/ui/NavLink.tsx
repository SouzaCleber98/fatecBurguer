interface Link {
  href: string;
  label: string;
}

interface NavLinkProps {
  links: Link[];
}

function NavLink({ links }: NavLinkProps) {
  const createLinks = links.map((link) => (
    <a key={link.href} href={link.href}>
      {link.label}
    </a>
  ));

  return <>{createLinks}</>;
}

export default NavLink;
