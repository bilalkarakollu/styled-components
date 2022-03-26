import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.variant === 'primary' ? '#000' : '#fff'};
    transition: all 0.3s;
    border: 2px solid #000;
    color: ${props => props.variant === "primary" ? "#fff" : "#000"};
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background: #000;
        color: #fff;
    }
`;

export const FancyButton = styled(Button)`
    background: linear-gradient(to right, #000, #fff);
    `;