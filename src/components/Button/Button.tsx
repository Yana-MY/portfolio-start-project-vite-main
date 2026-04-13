import styled from "styled-components";



export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #4e71fe;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    color: #4e71fe;
    
    &:hover {
        background-color: #4e71fe;
        color: #fff;
    }
`