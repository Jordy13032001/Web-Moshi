import React from 'react';

const GallerySection = () => {
  // Array de fotos
  const photos = [
    { id: 1, caption: 'Mejores momentos' },
    { id: 2, caption: 'Inolvidable' },
    { id: 3, caption: 'Siempre juntos' },
    { id: 4, caption: 'Risas 💜' },
    { id: 5, caption: 'Un día genial' },
    { id: 6, caption: 'Moshi!' }
  ];

  return (
    <section className="section-wrapper">
      <h2 className="section-title">Nuestros Recuerdos 📷</h2>
      <div className="section-divider"></div>
      
      {/* Estilo 4: Polaroid Vintage */}
      <div className="gallery-container">
        {photos.map((item) => (
          <div key={item.id} className="polaroid-card">
            <div className="polaroid-photo">
              <span style={{ fontSize: '3rem', opacity: 0.5 }}>📸</span>
            </div>
            <p className="polaroid-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
