import { React } from 'react'
import PropTypes from 'prop-types'
import { principal, secondary } from './IntroductionSlide.module.scss'
import { StickerMaker } from '../../components'
import cohete from '../../assets/rocket.svg'

const IntroductionSlide = ({ goNext }) => (
  <div className={principal}>
    <h1>El Tesoro Azul de Nuestro Planeta: ¡Corre que el Tiempo se Agota!</h1>
    <p className={secondary}>
      ¡Prepárense para un viaje urgente! El agua, el tesoro azul de nuestro planeta, es vital para la vida.
      Pero, ¿sabías que el cambio climático está amenazando su disponibilidad?
    </p>
    <button onClick={goNext} type="button">
      siguiente
    </button>
    <StickerMaker imageUrl={cohete} />
  </div>
)

IntroductionSlide.propTypes = {
  goNext: PropTypes.func,
}

IntroductionSlide.defaultProps = {
  goNext: null,
}

export default IntroductionSlide
