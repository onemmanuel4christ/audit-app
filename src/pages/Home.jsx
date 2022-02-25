import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0F0F0FB2;

`

const Banner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    object-fit: cover;
    background-repeat: no-repeat;   
    background-image: url('./images/banner.jpeg');
    background-size: cover;
    padding: 5px;
`
const Logo = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-top: 68px;
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
    margin-bottom: 20px;
    margin-top: 13px;
    cursor: pointer;
    text-align: center;
    @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    
    }
`
const Text = styled.span`
    text-transform: uppercase;
    margin-bottom: 48px;
    color: #FFFFFF;
    text-align: center;
    @media only screen and (max-width: 800px) {
    font-size: .8rem;
    /* margin: 10px; */
    margin: 1.5rem;

    }
`
const Button = styled.a`
    background-color: #05A850;
    width: 350px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 63px; */
    border: 0;
    padding: 10px;
    color: #fff;
    margin-bottom: 107px;
    cursor: pointer;
    text-decoration: none;  
    border-radius: 5px;  
    @media only screen and (max-width: 800px) {
    width: 80%;
    font-size: 1rem;
    margin-top: 1rem;
    }    
`

const Home = () => {
    return (
        <WrapperDiv>
          <Navbar />
                <Banner>
                    <Logo src="./images/njc-logo.png" alt='njc logo' />
                            <Title>
                                NATIONAL JUDICIARY COUNCIL
                            </Title>
                            <Text>
                                A FAST, SIMPLE AND EFFICIENT way to review and verify the <br /> accuracy of financial records .
                            </Text>
                            <Button href="/login">
                                Login
                            </Button>
                </Banner>
                <Footer />
        </WrapperDiv>
    )
}

export default Home
