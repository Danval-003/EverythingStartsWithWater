import React, { useState } from 'react'
import { principal } from './SweetWaterSlide.module.scss'
import { RoundedButton, ImageGalery } from '../../components'

const SweetWaterSlide = ({ goNext, texts }) => (
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
      <RoundedButton text={texts[3]} onClick={goNext} />
    </div>
  </div>
)

export default SweetWaterSlide
