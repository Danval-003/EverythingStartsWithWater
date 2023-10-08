import React from 'react';
import PropTypes from 'prop-types';
import { principal, secondary, videoContainer } from './IntroductionSlide.module.scss'; // Importa tus estilos


const IntroductionSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <h2>{texts[1]}</h2>
    <p className={secondary}>{texts[2]}</p>
    <div className={`small-video-container ${videoContainer}`}>
      
    </div>
    <button onClick={goNext} type="button">
      {texts[3]}
    </button>
  </div>
);

IntroductionSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

IntroductionSlide.defaultProps = {
  goNext: null,
};

export default IntroductionSlide;
