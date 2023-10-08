import { React } from 'react'
import PropTypes from 'prop-types'
import { principal } from './IntroSlide.module.scss'

const IntroSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <button onClick={goNext} type="button">
      {texts[1]}
    </button>
  </div>
)

IntroSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

IntroSlide.defaultProps = {
  goNext: null,
}

export default IntroSlide
