import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || '#1a98e0'};
    border-radius: 2vw;
    padding: 1vw 2vw;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.2vw;
    font-family: 'PPFragment';
    margin: 1.2vw;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0f7290;
    }
`

const RoundedButton = ({ text, backgroundColor, onClick }) => (
  <Button backgroundColor={backgroundColor} style={{ fontFamily: 'Gabarito' }} onClick={onClick}>
    {text}
  </Button>
)

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}

RoundedButton.defaultProps = {
  backgroundColor: '#1a98e0', // Valor por defecto para backgroundColor
  onClick: () => {}, // Valor por defecto para onClick, una función vacía
}

export default RoundedButton
