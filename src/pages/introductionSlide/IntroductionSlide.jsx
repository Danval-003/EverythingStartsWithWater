import React from 'react';
import PropTypes from 'prop-types';
import { principal, secondary, videoContainer } from './IntroductionSlide.module.scss'; // Importa tus estilos

import videoNasa from '../../assets/introductionNasa.webm';

const IntroductionSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <h2>{texts[1]}</h2>
    <p className={secondary}>{texts[2]}</p>
    <div className={`small-video-container ${videoContainer}`}>
      <video controls autoPlay className="small-video">
        <source src={videoNasa} type="video/webm" />
        <track kind="captions" src="/ruta/al/subtitulos.vtt" srcLang="es" label="Español" default />
        Tu navegador no admite el elemento de video.
      </video>
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
