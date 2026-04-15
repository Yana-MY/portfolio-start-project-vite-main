import styled from "styled-components";
import MyImage from '../assets/images/image.jpg'


export const Image = styled.img.attrs({
    src: MyImage,
    alt: "Картинка"
})`
    border: 1px solid #000;
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 170px;
    //margin: 10px 10px;
`


