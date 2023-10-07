import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.backgroundColor || '#409CD0'};
    border-radius: 10px;
    padding: 10px 20px; 
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px; 
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #00BCB6;
    }
`;

const RoundedButton = ({ text, backgroundColor, onClick }) => {
    return (
        <Button backgroundColor={backgroundColor} onClick={onClick}>
            {text}
        </Button>
    );
};

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};

export default RoundedButton;
