import styled from "styled-components"
/* import {Register} from "./Register"; */

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        #ffffff37,
        #ffffff48
        ), 
    url(https://st2.depositphotos.com/1680906/11836/i/600/depositphotos_118368390-stock-photo-rice-fields-on-terrace-in.jpg);
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background: linear-gradient(0deg, #f8f8f8 100%, #847e70 100%);
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form  = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #78f068;
    color: black;
    cursor: pointer;
`;
const Link = styled.a`
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Your username"/>
                    <Input placeholder="Your password"/>
                </Form>
                <br></br>
                <Button>LOG IN</Button>
                <br></br>
                <br></br>
                <Link>DO NOT YOU REMEMBRE THE PASSWORD?</Link>
                <br></br>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
      )

}

export default Login