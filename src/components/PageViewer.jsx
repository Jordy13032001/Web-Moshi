import React, { useState } from 'react';
import LetterSection from './LetterSection';

import foto1 from '../assets/1.jpeg';
import foto2 from '../assets/2.jpeg';
import foto3 from '../assets/3.jpeg';
import foto4 from '../assets/4.jpeg';
// Importa la imagen de fondo con mayor calidad
import bgImage from '../assets/fondo.jpg';
import videoFinal from '../assets/video.mp4';

const PageViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Lista de páginas.
  // La primera página (índice 0) es la carta.
  // Las siguientes (índice 1 en adelante) son fotos individuales.
  const pagesData = [
    { type: 'letter' },
    {
      type: 'photo',
      src: foto1,
      caption: 'Me encanta esa sonrisa característica que te define <3'
    },
    {
      type: 'photo',
      src: foto2,
      caption: 'Esos cachetitos me alegran los días ❤️'
    },
    {
      type: 'photo',
      src: foto3,
      caption: 'Todos tus estilos son increíbles, vuelve a pintarte el mechón :( ✨'
    },
    {
      type: 'photo',
      src: foto4,
      caption: 'Ya quiero tener esa carita enfrente mio para poder apreciarla mucho mas. ❤️'
    },
    {
      type: 'outro'
    }
  ];

  const totalPages = pagesData.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const currentPageData = pagesData[currentPage];

  return (
    <div
      className="viewer-wrapper"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="viewer-overlay"></div>

      <div className="page-viewer-container">

        {/* Flecha Izquierda Flotante */}
        <button
          className="arrow-btn arrow-left"
          onClick={handlePrev}
          disabled={currentPage === 0}
          title="Página anterior"
        >
          ❮
        </button>

        <div className="page-content animate-fade-in" key={currentPage}>
          {currentPageData.type === 'letter' && (
            <LetterSection />
          )}

          {currentPageData.type === 'photo' && (
            <div className="polaroid-large">
              <div className="polaroid-large-photo">
                <img src={currentPageData.src} alt="Moshi" />
              </div>
              <p className="polaroid-large-caption">{currentPageData.caption}</p>
            </div>
          )}

          {currentPageData.type === 'outro' && (
            <div className="paper-container animate-fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '400px', maxWidth: '600px' }}>
              <video 
                src={videoFinal} 
                autoPlay 
                loop 
                muted 
                playsInline 
                controls
                style={{ width: '100%', maxWidth: '280px', borderRadius: '16px', marginBottom: '25px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)' }}
              />
              <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '3.2rem', color: '#8A2BE2', margin: '0', lineHeight: '1.2', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
                Por ultimo un beshito para ti ❤️ ✨
              </h2>
            </div>
          )}
        </div>

        {/* Flecha Derecha Flotante */}
        <button
          className="arrow-btn arrow-right"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          title="Siguiente página"
        >
          ❯
        </button>

      </div>
    </div>
  );
};

export default PageViewer;
