import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Introduction: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: 'fas fa-4x fa-bus',
      title: 'Curabitur at elit eu risus',
      description: 'Sed ultrices sit amet mi eu malesuada. Cras ultricies gravida nisi, ac pellentesque nunc tincidunt quis. Aenean at ornare lacus. Duis imperdiet lacus justo.'
    },
    {
      icon: 'fas fa-4x fa-bicycle',
      title: 'Nunc sed metus vel nisi',
      description: 'Praesent ut finibus leo. Duis et tempus ipsum, id pretium nunc. Vivamus imperdiet sem quis orci pharetra convallis. Nunc a tempus nisi, sed fringilla purus. In hac habitasse platea.'
    },
    {
      icon: 'fas fa-4x fa-city',
      title: 'Fusce sed nisi sagittis',
      description: 'Donec vestibulum libero nisl. Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus.'
    }
  ];

  return (
    <section id="introduction" className="tm-section-pad-top">
      <Container>
        <Row>
          <Col lg={6}>
            <img 
              src="/img/the-town-01.jpg" 
              alt="Company" 
              className="img-fluid tm-intro-img" 
            />
          </Col>
          <Col lg={6}>
            <div className="tm-intro-text-container">
              <h2 className="tm-text-primary mb-4 tm-section-title">Introduction</h2>
              <p className="mb-4 tm-intro-text">
                The Town is <strong>simple CSS template</strong> built on Bootstrap v4.1.3 
                and this is a little parallax layout that you can use for your websites.
              </p>
              <p className="mb-5 tm-intro-text">
                Please tell your friends about our site 
                <a rel="nofollow" href="https://templatemo.com"> templatemo</a>. Thank you.
                Curabitur dapibus tristique enim a imperdiet. Etiam
                tristique sem sed condimentum posuere.
              </p>
              <div className="tm-next">
                <button 
                  className="tm-intro-text tm-btn-primary"
                  onClick={() => scrollToSection('work')}
                >
                  Read More
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="tm-section-pad-top">
          {features.map((feature, index) => (
            <Col lg={4} key={index} className={index > 0 ? 'mt-5 mt-lg-0' : ''}>
              <i className={`${feature.icon} text-center tm-icon`}></i>
              <h4 className="text-center tm-text-primary mb-4">{feature.title}</h4>
              <p>{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Introduction;
