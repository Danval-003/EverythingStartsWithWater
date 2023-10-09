import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { principal } from './SweetWaterSlide.module.scss'
import { RoundedButton, ImageGalery } from '../../components'

const SweetWaterSlide = ({ goNext, texts, goReturn }) => (
  <div className={principal}>

    <h1>{texts[0]}</h1>
    <p>
      {texts[1]}
    </p>
    <p>
      {texts[2]}
    </p>

    <ImageGalery />
    <div className="btn-div">
      <RoundedButton text={texts[4]} onClick={goReturn} />
      <RoundedButton text={texts[3]} onClick={goNext} />
    </div>
  </div>
)

SweetWaterSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

SweetWaterSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default SweetWaterSlide
