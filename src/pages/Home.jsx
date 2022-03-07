import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0F0F0FB2;

`

const Banner = styled.div`
    height: calc(100vh - 214px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    padding-left: 10px;
    padding-right: 10px;
    background-repeat: no-repeat;   
    background-image: url('./images/banner.jpeg');
    background-size: cover;
`
const Logo = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
    @media only screen and (max-width: 800px) {
    margin: 0;
    width: 120px;
    height: 120px;
    margin-top: 4rem;
    }
`
const Title = styled.span`
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 69px;
    cursor: pointer;
    text-align: center;
    @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    
    }
`
const Button = styled.a`
    background-color: #05A850;
    width: 350px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 10px;
    margin-bottom: 10px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;  
    border-radius: 5px;
    :hover{
        color: #fff;
    }  
    @media only screen and (max-width: 800px) {
    width: 80vw;
    font-size: 1rem;
    margin-top: 1rem;
    }    
`

const Home = () => {
    return (
        <WrapperDiv>
          <Navbar />
                <Banner>
                    <Fade top>
                     <Logo src="./images/njc-logo.png" alt='njc logo' />
                    </Fade>
                     <Title>
                         <Fade bottom>
                            NATIONAL JUDICIARY COUNCIL
                        </Fade>
                    </Title>
                    <Fade bottom>
                        <Button href="/login">   
                            Login
                        </Button>
                    </Fade>
                </Banner>
                <Footer />
        </WrapperDiv>
    )
}

export default Home
