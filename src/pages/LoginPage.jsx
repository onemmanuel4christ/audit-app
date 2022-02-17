import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    /* background-color: #E5E5E5;
    height: 100%;
    position: relative; */

`
const Top = styled.div`
    height: 200px;
    background-image: url('./images/login.svg');
    object-fit: cover;
    background-repeat: no-repeat; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Bottom = styled.div`
    background-color: #E5E5E5;
    height: calc(100vh - 200px);
  

`

const LoginAre = styled.div`
    width: 340px;
    height: 421px;
    position: absolute;
    top: 141px;
    left: center;
    background-color: #FFFFFF;
    z-index: 100;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:0 20px;
`
const Logo = styled.img`
    width: 89px;
    height: 89px;
`
const Title = styled.span`
    font-size: 18px;
    font-weight: 700;
    text-align: center;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`
const Input = styled.input`
   width: 100%; 
   border: 0;
   border-bottom: 1px solid #C4C4C4;
   margin-top: 28px;
   outline: none;
`
const LoginPage = () => {
  return (
      <>
          <Top>
              <LoginAre>
                  <Logo src='./images/njc-logo.png' />
                  <Title>National Judicial council. <br />
                      Welcome!</Title>
                  <Form >
                      <Input type='text' placeholder='Enter User-Id' />
                      <Input type='password' placeholder='Enter User-password' />
                  </Form>
              </LoginAre>
          </Top>
          <Bottom>

          </Bottom>
         
      </>
  )
}

export default LoginPage
