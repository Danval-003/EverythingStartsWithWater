import { React, useState } from 'react'
import { principal } from './IntroSlide.module.css'
import PropTypes from 'prop-types'

const IntroSlide = ({ goNext }) => (
  <div className={principal}>
    <h1>Everything Starts With Water</h1>
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
