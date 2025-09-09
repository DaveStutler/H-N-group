import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="text-white tm-font-big tm-parallax">
      <div className="text-center tm-hero-text-container">
        <div className="tm-hero-text-container-inner">
          <h2 className="tm-hero-title">H&N Group</h2>
          <p className="tm-hero-subtitle">
            Drafting Company
          </p>
        </div>        
      </div>

      <div className="tm-next tm-intro-next">
        <button 
          className="text-center tm-down-arrow-link"
          onClick={() => scrollToSection('introduction')}
        >
          <i className="fas fa-3x fa-caret-down tm-down-arrow"></i>
        </button>
      </div>      
    </section>
  );
};

export default Hero;
