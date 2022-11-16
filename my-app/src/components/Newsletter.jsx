
import styled from 'styled-components'

const Container =styled.div`
  height: 60vh;
  background-color: #d2e3e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title =styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description =styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer =styled.div`
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  justify-content: space-between;
  display: flex;
  border: 1px solid lightgray;
`;

const Input =styled.input`
  border: none;
  width: 90%;
  padding-left: 20px;
`;

const Button =styled.button`
  border: none;
  width: 80px;
  background-color: teal;
  color: white;
`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>The standard Lorem Ipsum passage, used since the 1500s</Description>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
          </svg>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter