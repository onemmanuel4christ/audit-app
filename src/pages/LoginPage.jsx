import React from 'react'
import styled from 'styled-components'

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;

`
const Top = styled.div`
    height: 200px;
    background-image: url('./images/login.svg');
    object-fit: cover;
    background-repeat: no-repeat; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    position: relative;
`
const Bottom = styled.div`
    background-color: #E5E5E5;
    height: calc(100vh - 200px);
    
`

const LoginArea = styled.div`
    width: 540px;
    height: 621px;
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
    @media only screen and (max-width: 800px) {
     width: 80%;
     padding-bottom: 2rem;
     height: 70vh;
    }
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
    @media only screen and (max-width: 800px) {
     width: 90%;
    }
`
const Login = styled.a`
width: 85%;
padding: 15px;
display: flex;
align-items: center;
justify-content: center;
color: #ffff;
background-color: #05A850;
border: 0;
outline: none;
margin-top: 30px;
cursor: pointer;
text-decoration: none;
border-radius: 5px;
margin-top: 80px;
:hover{
    color: #ffff;
}
@media only screen and (max-width: 800px) {
     width: 80%;
     padding: 1rem;
     margin-top: 1rem;

    }
`
const Input = styled.input`
   width: 90%; 
   border: 0;
   border-bottom: 1px solid #C4C4C4;
   margin-top: 57px;
   outline: none;
   @media only screen and (max-width: 800px) {
     margin-top: 1.5rem;
     margin-bottom: 1.5rem;

    }
`
const ForgotPassword = styled.div`
margin-top: 10px;
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
margin-right: 5px;

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
      <WrapperDiv>
          <Top>
              <LoginArea>
                  <Logo src='./images/njc-logo.png' />
                        <Title>
                            National Judicial council. <br /> Welcome!
                        </Title>
                  <Form >
                      <Input type='text' placeholder='Enter Username' />
                      <Input type='password' placeholder='Enter password' />
                      <ForgotPassword>
                          <Text>
                            <CheckBox type='checkbox'/>
                              <span>Remember me</span>
                          </Text>
                         
                            <span> <a href="/reset-password" style={{textDecoration: 'none', color: 'inherit'}}>Forgot password?</a></span>
                      </ForgotPassword>
                     
                      <Login href ="/dashboard">
                            Login
                      </Login>

                  </Form>
              </LoginArea>
          </Top>
            <Bottom>

          </Bottom>   
      </WrapperDiv>
  )
}

export default LoginPage
