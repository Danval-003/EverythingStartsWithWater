import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { principal } from './IntroSlide.module.scss'

const IntroSlide = ({ goNext }) => (
  <div className={principal}>
    <h1>Everything Starts With Water</h1>
    <p>Explora el fascinante ciclo del agua y 
      reflexiona sobre como el cambio climatico 
      esta desafiando la manera en que interactuamos 
      con este recurso vital, remodelando nuestro entendimiento
      y exigiendo una gestion mas cuidadosa y sostenible 
      para garantizar su disponibilidad en el futuro.</p>
    <button onClick={goNext} type="button">
      Hola
    </button>
  </div>
)

IntroSlide.propTypes = {
  goNext: PropTypes.func,
}

IntroSlide.defaultProps = {
  goNext: null,
}

export default IntroSlide
