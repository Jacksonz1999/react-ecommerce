import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container= styled.div`
`;
const Wrapper= styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer= styled.div`
    flex: 1;
`;
const Image= styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;
const InfoContainer= styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title= styled.h1`
    font-weight: 200;
`;
const Description= styled.p`
    margin: 20px 0px ;
`;
const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    margin-top: 30px;
`;
const AmountContainer= styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 10px;

`;
const Amount= styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    ;
`;
const Button= styled.button`
    padding: 10px;
    border: 2px solid yellowgreen;
    border-radius: 15%;
    background-color: white;
    cursor:pointer;
    font-weight: 700;
    &:hover{
        background-color: #e9d68d;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://www.vanish.es/static/30990bd41a66b47ff59fea7686fb8e1d/ff270/p-23747_vanish_bodegon_mascotas-_espuma.png"/>
            </ImgContainer>
            <InfoContainer>
                <Title>VANISH OXI ACTION ESPECIAL MANCHAS DE MASCOTAS</Title>
                <Description>El Quitamanchas Vanish Especial Manchas de Mascota elimina las manchas de orina, vómito, excrementos y barro de perros, gatos u otros animales de compañía, en alfombras y tapicerías en solo 30 segundos. Además, neutraliza olores y se puede usar en alfombras de diferentes colores y tejidos.</Description>
                <Price>14.95€</Price>
            <AddContainer>
                <AmountContainer>
                    {/* <Remove/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    <Amount>1</Amount>
                    {/* <Add/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product