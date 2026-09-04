import React from 'react';
import '../envelope.css';

const EnvelopeTransition = () => {
  return (
    <div className="envelope-overlay">
      <div className="envelope-wrapper">
        <div className="envelope-back"></div>
        
        <div className="envelope-paper">
          <div className="paper-heart">💜</div>
          <span style={{ marginTop: '10px' }}>Para ti...</span>
        </div>
        
        <div className="envelope-flap-left"></div>
        <div className="envelope-flap-right"></div>
        <div className="envelope-flap-bottom"></div>
        <div className="envelope-flap-top"></div>
        
        <div className="envelope-seal">💜</div>
      </div>
    </div>
  );
};

export default EnvelopeTransition;
