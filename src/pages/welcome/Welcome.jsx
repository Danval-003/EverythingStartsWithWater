import React from 'react'
import PropTypes from 'prop-types'
import { RoundedButton } from '../../components'
import styles from './Welcome.module.css'

const Welcome = ({ setIndex, index }) => (
  <div className={styles.container}>
    Everything starts with water
    <RoundedButton
      text="😁"
      onClick={() => setIndex(index)}
      backgroundColor="rgb(220, 0, 0)"
    />
  </div>
)

Welcome.propTypes = {
  setIndex: PropTypes.func.isRequired, // Declarar que setIndex debe ser una función requerida
  index: PropTypes.number.isRequired, // Declarar que index debe ser un número requerido
}

export default Welcome
