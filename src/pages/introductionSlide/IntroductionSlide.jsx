import { React } from 'react'
import PropTypes from 'prop-types'
import { principal, secondary } from './IntroductionSlide.module.scss'
import { StickerMaker } from '../../components'
import cohete from '../../assets/cohete.png'

const IntroductionSlide = ({ goNext, texts }) => (
  <div className={principal}>
    <h1>{texts[0]}</h1>
    <h2>{texts[1]}</h2>
    <p className={secondary}>
      {texts[2]}
    </p>
    <button onClick={goNext} type="button">
      {texts[3]}
    </button>
    {/*<StickerMaker imageUrl={cohete} />*/}
  </div>
)

IntroductionSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

IntroductionSlide.defaultProps = {
  goNext: null,
}

export default IntroductionSlide
