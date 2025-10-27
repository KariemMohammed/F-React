import './Portfolio.css';
import React, { useEffect, useState } from 'react';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const openModal = (src) => {
    setSelectedImage(src);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [port1, port2, port3, port1, port2, port3];

  return (
    <>
      <div>
        <h1 className='text-uppercase text-center pt-3 font'>portfolio component</h1>
      </div>
      <div className="linee mx-auto pt-3">
        <i className="fa-solid fa-star"></i>
      </div>

      <div className='container my-4'>
        <div className='row g-5'>
          {images.map((img, i) => (
            <div className='col-lg-4 col-md-6' key={i}>
              <div className='rounded-3 overflow-hidden position-relative'>
                <img
                  src={img}
                  alt={`Img ${i}`}
                  className="img-fluid w-100"
                  onClick={() => openModal(img)} 
                  style={{ cursor: 'pointer' }}
                />
                <div
                  className='layer position-absolute top-0 start-0 end-0 bottom-0 z-1 d-flex justify-content-center align-items-center'
                  onClick={() => openModal(img)} 
                >
                  <i className="fa-solid fa-plus text-white size-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Selected"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
