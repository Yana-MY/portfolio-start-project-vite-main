import './App.css'
import styled, {createGlobalStyle} from "styled-components";
import myImage from './assets/images/image.jpg'
import {Card} from "./components/Card/Card.tsx";
import {Button} from "./components/Button/Button.tsx";
import {Title} from "./components/Title/Title.tsx";






function App() {
    return (
        <div className="App">
            <div className="container">
                <Card>
                    <div className="flex-container">
                        <img src={myImage} alt={"Картинка"} className="my-image"/>
                        <div className="text-wraper">
                            <Title>Headline</Title>
                            <span className="all-text" style={{
                                fontFamily: 'Inter, sans-serif', fontSize: '12px', lineHeight: '1.66667',
                                color: '#abb3ba', maxWidth: '260px'
                            }}>
                            Faucibus.Faucibus.Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                            </span>
                        </div>
                        <div className="button-container">
                            <Button as="a">See more</Button>
                            <Button>Save</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default App


const Image = styled.img`
    return (
    
`

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
