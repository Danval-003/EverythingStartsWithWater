import React from 'react'
import styles from './LinkButton.module.scss'

const LinkButton = () => (
  <div>
    <div className={styles['gooey-button-container']}>
      F*** Awesome
      <span className={styles.bubbles}>
        {Array.from({ length: 10 }, (_, index) => (
          <span className={styles.bubble} key={index} />
        ))}
      </span>
    </div>
  </div>
)

export default LinkButton
