import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import PageViewer from './components/PageViewer';
import EnvelopeTransition from './components/EnvelopeTransition';
import FloatingLyrics from './components/FloatingLyrics';
import fotoInicio from './assets/Moshi 1.jpg';
import corazon from './assets/corazon.jpg';
import stillWithYouAudio from './assets/Still with you.mp3';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isOpeningEnvelope, setIsOpeningEnvelope] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if ((hasEntered || isOpeningEnvelope) && audioRef.current && !showLyrics) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(error => {
        console.log("El navegador bloqueó el autoplay", error);
      });
    }
  }, [hasEntered, isOpeningEnvelope, showLyrics]);

  useEffect(() => {
    if (showLyrics && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(e => console.log(e));
    }
  }, [showLyrics]);

  const handleEnterClick = () => {
    setIsOpeningEnvelope(true);
    
    setTimeout(() => {
      setIsOpeningEnvelope(false);
      setHasEntered(true);
      setShowLyrics(true); // Inicia la música y la letra justo cuando se abre la carta
    }, 3800);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Reproductor de Audio */}
      <audio 
        ref={audioRef} 
        src={showLyrics ? stillWithYouAudio : "/dynamite.mp3"} 
        loop={!showLyrics} /* Si es Dynamite que haga loop, si es Still With You que fluya normal */ 
      />

      {/* Letras Flotantes Globales */}
      {showLyrics && <FloatingLyrics audioRef={audioRef} />}

      {isOpeningEnvelope && <EnvelopeTransition />}

      {!hasEntered && !isOpeningEnvelope && (
        <div className="intro-screen">
          <div className="intro-glass animate-fade-in" style={{ padding: '4rem 3rem', maxWidth: '700px', textAlign: 'center', position: 'relative' }}>
            
            <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={fotoInicio}
                alt="Portada del Álbum" 
                style={{
                  width: '280px',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  border: '6px solid #fff',
                  boxShadow: '0 15px 35px rgba(177, 130, 255, 0.4)',
                  transition: 'transform 0.4s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>

            <h1 style={{ marginBottom: '1rem', fontSize: '3rem', background: 'linear-gradient(to right, #B182FF, #E6E6FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '1px', textShadow: '0 0 10px rgba(177,130,255,0.3)' }}>
              Con mucho cariño de Jordy
            </h1>
            
            {/* Imagen Corazón (Manos) */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <img 
                src={corazon} 
                alt="Corazón de manos" 
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
                  animation: 'heartbeat 2.5s infinite'
                }} 
              />
            </div>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '2.5rem', lineHeight: '1.7', fontWeight: '300' }}>
              He preparado esto para ti como una manera de demostrar lo que siento por ti, espero te guste. c:<br/><br/>
              <em>Te Quiero ❤️</em>
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="btn-neon" 
                onClick={handleEnterClick}
              >
                Empezar ✨
              </button>
            </div>
            
          </div>
        </div>
      )}

      {hasEntered && (
        <div style={{ width: '100%' }}>
          {/* El PageViewer tiene su propio fondo */}
          <PageViewer />
        </div>
      )}

    </div>
  );
}

export default App;
