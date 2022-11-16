import styled from "styled-components"
import React from 'react'

const Container = styled.div`
  height: 30px;
  background-color: #bec78e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Just for you: FREE Shipping on your order!</Container>
  )
}

export default Announcement