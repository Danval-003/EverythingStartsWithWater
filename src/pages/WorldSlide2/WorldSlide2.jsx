import React from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '../../components'
import {
  principal, secondary, smallVideoContainer, smallVideo, onWater, world,
} from './WorldSlide2.module.scss'

const WorldSlide = ({ goNext, texts }) => (
  <div>
    <div className={principal}>
      <h1>{texts[0]}</h1>
      <p className={secondary}>
        {texts[1]}
      </p>
      <RoundedButton onClick={goNext} text={texts[2]} />
    </div>
  </div>

)

WorldSlide.propTypes = {
  goNext: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

WorldSlide.defaultProps = {
  goNext: null,
}

export default WorldSlide
