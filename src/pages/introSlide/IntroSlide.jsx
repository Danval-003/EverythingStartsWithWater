import { React } from 'react'
import PropTypes from 'prop-types'
import { principal } from './IntroSlide.module.scss'

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
