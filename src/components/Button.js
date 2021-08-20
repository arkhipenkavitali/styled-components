import React from 'react';
import styled, {css, keyframes} from "styled-components";

const rotateAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
`

const StyledButton = styled.button.attrs(props => ({
    outlined: true
}))`
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        outline: none;
        animation: ${rotateAnimation} 1s infinite linear;
    };
    align-self: ${({align}) => align || "flex-start"};
    
    ${props => props.primary && css`
        color: ${props => props.color || props.theme.color.primary};
        background: ${props => props.background || "green"};
    `};
    
    ${props => props.outlined && css`
        color: ${props => props.color || props.theme.color.primary};
        background: transparent;
        border: 1px solid ${props => props.color || "white"}
    `};
`

const LargeButton = styled(StyledButton)`
    font-size: 32px;
`

const Button = (props) => {
    return (
        <LargeButton {...props} />
    );
};

export default Button;