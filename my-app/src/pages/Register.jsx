import styled from "styled-components"
import React from 'react'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        #ffffff37,
        #ffffff48
        ), 
    url(https://st3.depositphotos.com/1002772/33523/i/600/depositphotos_335232048-stock-photo-longji-rice-terraces.jpg);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background: linear-gradient(0deg, #f8f8f8 100%, #847e70 100%);
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form  = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #78f068;
    color: black;
    cursor: pointer;
`;
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Your username"/>
                <Input placeholder="Your name"/>
                <Input placeholder="Your surname"/>
                <Input placeholder="Your email"/>
                <Input placeholder="Your password"/>
                <Input placeholder="Confirm your password"/>
            </Form>
            <Agreement>
                By creating an account, I consent to processing of my personal 
                data in accordance with the <b>TERMS OF USE</b> and <b>PRIVACY POLICY</b>.
            </Agreement>
            <br></br>
            <Button>CREATE MY ACCOUNT</Button>
        </Wrapper>
    </Container>
  )
}

export default Register