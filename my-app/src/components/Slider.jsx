import { useState } from "react";
import styled from "styled-components"
import {sliderItems} from "../pages/data"
//import portada1 from "../assets/img/portada1.jpg"

const Container= styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position:relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all  1.4s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 60%;
    margin-top: 100px;
    padding: 10px;
`;

const Arrow = styled.div`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    position: absolute;
    top 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction ==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 60px;        
`;
const Description = styled.div`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`

    padding: 15px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
        const[slideIndex, setSliedeIndex] = useState(0);

    const handleClick = (direction) =>{
        if(direction ==="left"){
            setSliedeIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else{
            setSliedeIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    }
   return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
            <Slide bg= {item.bg}>
            <ImgContainer>
                <Image src= {item.img} key={item.id}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.Title}</Title>
                <Description>{item.Description}</Description>
                <Button>Compra ahora</Button>
            </InfoContainer>
            </Slide>
            
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
        </Arrow>
    </Container>
  )
}

export default Slider