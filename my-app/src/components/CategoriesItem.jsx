import styled from "styled-components"
import React from 'react'

const Container= styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position:relative;
`;
const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`;
const Info= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title= styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button= styled.button`
    border: none;
    padding: 15px;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
    color: gray;
`;

const CategoriesItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.Title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoriesItem