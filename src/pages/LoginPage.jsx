import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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

const LoginArea = styled.div`
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
    padding: 23px;
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
    justify-content: space-between;
    width: 100%;

`
const Input = styled.input`
   width: 90%; 
   border: 0;
   border-bottom: 1px solid #C4C4C4;
   margin-top: 28px;
   outline: none;
`
const ButtonLogin = styled.button`
width: 90%;
padding: 15px;
display: flex;
align-items: center;
justify-content: center;
color: #ffff;
background-color: #05A850;
border: 0;
outline: none;
margin-top: 81px;
cursor: pointer;
`

const ForgotPassword = styled.div`
margin-top: 5px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
span{
    margin-right: 10px;
    font-size: 12px;
    color: #0F0F0F; 
}
`
const CheckBox = styled.input`
margin-left: 15px;
border: 1px solid #05A850;
`
const Text = styled.div`
display: flex;
align-items: center;
span{
    font-size: 12px;
    color: #0F0F0F;
}
`
const LoginPage = () => {
  return (
      <>
          <Top>
              <LoginArea>
                  <Logo src='./images/njc-logo.png' />
                  <Title>National Judicial council. <br />
                      Welcome!</Title>
                  <Form >
                      <Input type='text' placeholder='Enter User-id' />
                      <Input type='password' placeholder='Password' />
                      <ForgotPassword>
                          <Text>
                            <CheckBox type='checkbox'/>
                              <span>Remember me</span>
                          </Text>
                          <span>Forgot password?</span>
                      </ForgotPassword>
                          <Link to="/dashboard" style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'inherit',
                              textDecoration: 'none',

                          }}>
                                <ButtonLogin>
                                    Login
                                </ButtonLogin>
                          </Link>
                  </Form>
              </LoginArea>
          </Top>
          <Bottom>

          </Bottom>
         
      </>
  )
}

export default LoginPage
