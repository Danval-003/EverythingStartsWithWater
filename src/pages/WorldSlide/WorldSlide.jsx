import React from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '../../components'
import {
  principal, secondary, smallVideoContainer, smallVideo, onWater, world,
} from './WorldSlide.module.scss'

import Earth from '../../assets/earth.gif'

const WorldSlide = ({ goNext, texts, goReturn }) => (
  <div>
    <div className={principal}>
      <h1>{texts[0]}</h1>
      <p className={secondary}>
        {texts[1]}
      </p>
      <RoundedButton onClick={goReturn} text={texts[3]} />
      <RoundedButton onClick={goNext} text={texts[2]} />
    </div>
    <img src={Earth} alt="JAksjdk" className={world} />
  </div>

)

WorldSlide.propTypes = {
  goNext: PropTypes.func,
  goReturn: PropTypes.func,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

WorldSlide.defaultProps = {
  goNext: null,
  goReturn: null,
}

export default WorldSlide
