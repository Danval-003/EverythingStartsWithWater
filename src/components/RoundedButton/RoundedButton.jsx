import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${(props) => props.backgroundColor || '#409CD0'};
    border-radius: 10vw;
    padding: 1vw 2vw; 
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1vw; 
    font-family: 'PPFragment';
    margin: 1.2vw;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #00BCB6;
    }
`

const RoundedButton = ({ text, backgroundColor, onClick }) => (
  <Button backgroundColor={backgroundColor} style={{ fontFamily: 'Sans Regular' }} onClick={onClick}>
    {text}
  </Button>
)

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
}

export default RoundedButton
