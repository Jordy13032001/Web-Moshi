import React from 'react';

const LetterSection = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Para Ti 💌</h2>
      <div className="section-divider"></div>
      
      {/* Estilo 3: Orgánico / Papel de Libreta */}
      <div className="paper-container">
        <div className="paper-text">
        <p style={{ marginBottom: '1rem' }}>
          Te escribo esto para decirte que, desde que te conocí, eres la persona más increíble y linda que ha llegado a mi vida. Me encanta todo de ti: tu sonrisa, tu estilo, y hasta tus cambios de humor (bueno, a veces no tanto jajaja, pero ni eso cambia lo que siento por ti).
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Hemos pasado por un montón de cosas, buenas y malas. Desde esas amanecidas jugando o simplemente hablando horas, hasta los días en que pasábamos discutiendo. Sé que estos meses nos hemos distanciado bastante, incluso dejamos de hablarnos un tiempo, pero al final siempre volvemos a escribirnos. Te extrañé un montón en esos días, la verdad no dejaba de pensar en ti. Juraba que enfocándome solo en mis cosas te iba a olvidar, pero no, no pude, No es facil para mi olvidar todo lo que he vivido junto a ti.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Aunque ahorita no estemos tan pegados porque cada quien anda en su mundo, lo que siento por ti sigue ahí. Yo sé que pronto nos vamos a encontrar, estaremos juntitos de nuevo y nadie nos va a separar.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Esta página la hice para ti. Quizás no sea lo mejor del mundo, pero para mí es una manera de expresar lo que siento por ti.
        </p>
        <p>
          Con mucho cariño tu pancito crudo &lt;3
        </p>
      </div>
      </div>
    </section>
  );
};

export default LetterSection;
