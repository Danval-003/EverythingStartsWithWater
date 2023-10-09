import React from 'react'
import PropTypes from 'prop-types'
import { RoundedButton, Hourglass } from '../../components'
import {
  principal, secondary, smallVideoContainer, smallVideo, onWater, world, hourglass, logoNasa,
} from './PolutionSlide.module.scss'
import logoNasaI from '../../assets/nasa-logo.svg'

import logoNational from '../../assets/nsg.svg'

const PolutionSlide = ({ goNext, texts, goReturn }) => (
  <div>
    <div className={principal}>
      <h1>{texts[0]}</h1>
      <h2 className={secondary}>
        {texts[1]}
      </h2>
      <ul>
        {
          texts[2].map((t) => (
            <li>{t}</li>
          ))
        }
      </ul>
      <div className={onWater}>
        <RoundedButton onClick={goReturn} text={texts[4]} backgroundColor="#135401" />
        <RoundedButton onClick={goNext} text={texts[3]} backgroundColor="#135401" />
      </div>
    </div>
    <div className={hourglass}>
      <Hourglass />
    </div>
    <div className={logoNasa}>
      <p>{texts[5]}</p>
      <a href="https://climate.nasa.gov/en-espanol/datos/evidencia/">
        <img src={logoNasaI} alt="Logo Nasa" />
      </a>
      <a
        href="https://www.nationalgeographic.com.es/medio-ambiente/asi-afecta-el-cambio-climatico-al-agua-del-planeta_9947"
      >
        <img src={logoNational} alt="Logo Nasa" />
      </a>
    </div>
  </div>

)

PolutionSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

PolutionSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default PolutionSlide
