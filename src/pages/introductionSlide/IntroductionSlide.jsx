import React from 'react'
import PropTypes from 'prop-types'
import {
  principal, secondary, smallVideoContainer, smallVideo,
} from './IntroductionSlide.module.scss'

<<<<<<< HEAD
=======
import videoNasa from '../../assets/introductionNasa.webm'
>>>>>>> 6342235c6100f58f62029991d1fa659d6f729179

const IntroductionSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <h2>{texts[1]}</h2>
    <p className={secondary}>{texts[2]}</p>
<<<<<<< HEAD
    <div className={`small-video-container ${videoContainer}`}>
      
=======
    <div className={smallVideoContainer}>
      <video controls className={smallVideo}>
        <source src={videoNasa} type="video/webm" />
        <track kind="captions" src="/ruta/al/subtitulos.vtt" srcLang="es" label="Español" default />
        Tu navegador no admite el elemento de video.
      </video>
>>>>>>> 6342235c6100f58f62029991d1fa659d6f729179
    </div>
    <button onClick={goNext} type="button">
      {texts[3]}
    </button>
  </div>
)

IntroductionSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

IntroductionSlide.defaultProps = {
  goNext: null,
}

export default IntroductionSlide
