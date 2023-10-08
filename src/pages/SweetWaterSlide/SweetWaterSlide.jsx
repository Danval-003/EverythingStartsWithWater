import React, { useState } from 'react'
import { principal } from './SweetWaterSlide.module.scss'
import { RoundedButton, ImageGalery } from '../../components'

import lake from '../../assets/lake.svg'
import taiga from '../../assets/taiga.svg'
import beach from '../../assets/beach.svg'
import paisaje from '../../assets/paisaje.png'
import cascade from '../../assets/cascade.png'

const SweetWaterSlide = ({ goNext, texts }) => (
  <div className={principal}>
    {' '}
    {/* Aplica la clase "principal" para aplicar los estilos */}

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
