import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Subscribed email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const contactItems = [
    {
      href: 'tel:0100200340',
      icon: 'fas fa-3x fa-phone mr-4',
      text: '010-020-0340'
    },
    {
      href: 'mailto:info@company.co',
      icon: 'fas fa-3x fa-envelope mr-4',
      text: 'info@company.co'
    },
    {
      href: 'https://www.google.com/maps',
      icon: 'fas fa-3x fa-map-marker-alt mr-4',
      text: 'Location on Maps'
    }
  ];

  return (
    <section id="contact" className="tm-section-pad-top tm-parallax-2">
      <Container className="tm-container-contact">
        <Row>
          <Col xs={12}>
            <h2 className="mb-4 tm-section-title">Contact Us</h2>
            <div className="mb-5 tm-underline">
              <div className="tm-underline-inner"></div>
            </div>
            <p className="mb-5">
              Nullam tincidunt, lacus a suscipit luctus, elit turpis tincidunt dui,
              non tempus sem turpis vitae lorem. Maecenas eget odio in sapien ultrices
              viverra vitae vel leo. Curabitur at elit eu risus pharetra pellentesque
              at at velit.
            </p>
          </Col>
          
          {contactItems.map((item, index) => (
            <Col sm={12} md={6} key={index} className="d-flex align-items-center tm-contact-item">
              <a href={item.href} className="tm-contact-item-link">
                <i className={item.icon}></i>
                <span className="mb-0">{item.text}</span>
              </a>              
            </Col>
          ))}
          
          <Col sm={12} md={6} className="d-flex align-items-center tm-contact-item">
            <Form onSubmit={handleSubmit} className="d-flex w-100">
              <Form.Control
                type="email"
                placeholder="Subscribe your email"
                className="tm-input me-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="tm-btn-submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      <footer className="text-center small tm-footer">
        <p className="mb-0">
          Copyright &copy; 2025 H&N Group 
        </p>
      </footer>
    </section>
  );
};

export default Contact;
