import React from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '@components'
import {
  principal, secondary, smallVideoContainer, smallVideo, botonn,
} from './IntroductionSlide.module.scss'

import videoNasa from '../../assets/introductionNasa.webm'

const IntroductionSlide = ({ goNext, texts, goReturn }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <h2>{texts[1]}</h2>
    <p className={secondary}>{texts[2]}</p>
    <div className={smallVideoContainer}>
      <video controls className={smallVideo}>
        <source src={videoNasa} type="video/webm" />
        <track kind="captions" src="/ruta/al/subtitulos.vtt" srcLang="es" label="Español" default />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
    <div className={botonn}>
      <RoundedButton onClick={goReturn} text={texts[4]} />
      <RoundedButton onClick={goNext} text={texts[3]} />
    </div>
  </div>
)

IntroductionSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

IntroductionSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default IntroductionSlide
