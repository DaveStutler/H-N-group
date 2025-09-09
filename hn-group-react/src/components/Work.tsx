import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';

interface GalleryItem {
  thumbnail: string;
  fullImage: string;
  title: string;
  subtitle: string;
}

const Work: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      thumbnail: '/img/gallery-tn-01.jpg',
      fullImage: '/img/gallery-img-01.jpg',
      title: 'Dreamy',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-02.jpg',
      fullImage: '/img/gallery-img-02.jpg',
      title: 'Second',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-03.jpg',
      fullImage: '/img/gallery-img-03.jpg',
      title: 'Third',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-04.jpg',
      fullImage: '/img/gallery-img-04.jpg',
      title: 'Fourth',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-05.jpg',
      fullImage: '/img/gallery-img-05.jpg',
      title: 'Fifth',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-06.jpg',
      fullImage: '/img/gallery-img-06.jpg',
      title: 'Sixth',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-01.jpg',
      fullImage: '/img/gallery-img-01.jpg',
      title: 'Seventh',
      subtitle: 'Honey'
    },
    {
      thumbnail: '/img/gallery-tn-02.jpg',
      fullImage: '/img/gallery-img-02.jpg',
      title: 'Eighth',
      subtitle: 'Honey'
    }
  ];

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    setShowModal(true);
  };

  return (
    <section id="work" className="tm-section-pad-top">
      <Container className="tm-container-gallery">
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="tm-text-primary tm-section-title mb-4">Our Work</h2>
            <p className="mx-auto tm-work-description">
              "Curabitur ac orci ac lorem blandit volutpat. Sed ac sodales nibh, ut
              porttitor elit. Sed id dui mi. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia."
            </p>
          </Col>            
        </Row>
        
        <Row>
          <Col xs={12}>
            <div className="mx-auto tm-gallery-container">
              <div className="grid tm-gallery">
                {galleryItems.map((item, index) => (
                  <div
                    key={index}
                    className="tm-gallery-item"
                    onClick={() => handleImageClick(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    <figure className="effect-honey">
                      <img 
                        src={item.thumbnail} 
                        alt={`Gallery ${index + 1}`} 
                        className="img-fluid"
                      />
                      <figcaption>
                        <h2>
                          <i>{item.title} <span>{item.subtitle}</span> Now</i>
                        </h2>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>                
          </Col>        
        </Row>
      </Container>

      {/* Modal for image preview */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
      >
        <Modal.Body className="p-0">
          {selectedImage && (
            <img 
              src={selectedImage.fullImage} 
              alt={selectedImage.title}
              className="img-fluid w-100"
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Work;
