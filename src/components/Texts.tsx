import styled from "styled-components";

export const Texts = () => {
    return (
        <StyledTexts>
            <Title>Headline</Title>
            <Span>
                Faucibus.Faucibus.Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
            </Span>
        </StyledTexts>
    );
};


 const StyledTexts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 20px;
    margin-left: 10px;
    max-width: 260px;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 16px;
    color: #000;
    text-align: left;
`

const Span = styled.span`
    font-size: 12px;
    line-height: 1.66667;
    color: #abb3ba;
    
`