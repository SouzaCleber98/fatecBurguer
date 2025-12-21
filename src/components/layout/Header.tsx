import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import DarkModeSwitcher from '../ui/DarkModeSwitcher';

// ---------- Types ----------
type navLink = {
  href: string;
  label: string;
};
//----------------------------------

const navLinks: navLink[] = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Cardápio' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
];

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(expanded) => setExpanded(expanded)}
        className="custom-navbar py-1"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <Logo />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.href}
                  as={Link}
                  to={link.href}
                  onClick={() => setExpanded(false)}
                  className="nav-link-custom"
                >
                  {link.label}
                </Nav.Link>
              ))}
              <DarkModeSwitcher />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
