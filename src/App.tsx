import './App.css'
import {createGlobalStyle} from "styled-components";
import {Card} from "./components/Card.tsx";
import {Button, ButtonContainer} from "./components/Button.tsx";
import {Image} from "./components/Image.tsx";
import {AppWrapper, FlexContainer,} from "./components/Wrappers.tsx";
import {Texts} from "./components/Texts.tsx"


function App() {
    return (
        <div className="App">
            <AppWrapper>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
                <Card>
                    <FlexContainer>
                        <Image/>
                        <Texts/>
                        <ButtonContainer>
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </ButtonContainer>
                    </FlexContainer>
                </Card>
            </AppWrapper>
        </div>

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
