import React from 'react'
import PropTypes from 'prop-types' // Importa PropTypes
import styles from './StickerMaker.module.css' // Archivo de módulo CSS para estilos

const StickerMaker = ({ imageUrl }) => (
  <div className={styles.stickerContainer}>
    <img src={imageUrl} alt="Sticker" className={styles.stickerImage} />
  </div>
)

StickerMaker.propTypes = {
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  // imageUrl puede ser una cadena (URL) o un objeto (SVG), es requerido
}

export default StickerMaker
