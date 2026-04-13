import './App.css'
import {createGlobalStyle} from "styled-components";
import {Card} from "./components/Card.tsx";
import {Button, ButtonContainer} from "./components/Button.tsx";
import {Title} from "./components/Title.tsx";
import {Image} from "./components/Image.tsx";
import {AppWrapper, FlexContainer, TextWraper} from "./components/Wrappers.tsx";


function App() {
    return (
        <AppWrapper>
                <Card>
                    <FlexContainer>
                        <Image></Image>
                        <TextWraper>
                            <Title>Headline</Title>
                            <span className="all-text" style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '12px',
                                lineHeight: '1.66667',
                                color: '#abb3ba',
                                maxWidth: '260px'
                            }}>
                            Faucibus.Faucibus.Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                            </span>
                        </TextWraper>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
        </AppWrapper>
    )
}

export default App




export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
