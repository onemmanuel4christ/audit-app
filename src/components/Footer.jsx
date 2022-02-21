import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    position: sticky;
    width: 100%;
    bottom: 0;
    height: 60px;
    left: 0;
    background-color: #0F0F0F;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 18px;
    padding-bottom: 18px ;  
    span{
        color: #ffff;
    }
`
const Footer = () => {
  return (
      <Container>
          <span>Designed by MBR Computer Consultants | Copyright © 2022 . All rights reserved.</span>
      </Container>
  )
}

export default Footer
