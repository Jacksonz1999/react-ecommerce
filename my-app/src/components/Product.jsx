import styled from "styled-components"

const Info=  styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.1);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container= styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;
const Circle=  styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position: absolute;
`;
const Image=  styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: gray;
    display: fl ex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.5s ease;

    &:hover{
        background-color: black;
        transform: scale(1.15);
    }
`;


const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src= {item.img}/>
        <Info>
            <Icon>
                {/* icon of cart */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" class="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
            </Icon>
            <Icon>
                {/* icon of search */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </Icon>
            <Icon>
                {/*icon of favorites*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="White" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product