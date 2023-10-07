import React from 'react';
import PropTypes from 'prop-types';
import './CircularButton.css'; // Importa el archivo CSS

const CircularButton = ({ text, onClick }) => {
  return (
    <button className="circular-button" onClick={onClick}>
      {text}
    </button>
  );
};

CircularButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CircularButton;
