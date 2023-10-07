import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || '#409CD0'};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white; /* Cambia el color del texto según tus preferencias */
    text-decoration: none;

    &:hover {
        background-color: #00BCB6;
    }
`

const CircularButton = ({ text, backgroundColor, onClick }) => (
  <Button backgroundColor={backgroundColor} onClick={onClick}>
    {text}
  </Button>
)

CircularButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}

CircularButton.defaultProps = {
  backgroundColor: 'aqua',
  onClick: null,
}

export default CircularButton
