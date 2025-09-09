import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 120;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="md" 
      className={`tm-navbar fixed-top ${scrolled ? 'scroll' : ''}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          H&N Group
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('introduction');
              }}
            >
              Introduction
            </Nav.Link>
            <Nav.Link 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('work');
              }}
            >
              Our Work
            </Nav.Link>
            <Nav.Link 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
