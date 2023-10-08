import { React } from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '@components'
import { principal } from './IntroSlide.module.scss'

const IntroSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <RoundedButton onClick={goNext} text={texts[1]} />
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
