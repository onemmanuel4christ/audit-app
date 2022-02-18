import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    /* background: url('./images/banner.jpeg'); */
    background-color: #0F0F0FB2;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;
`
const Banner = styled.div`
    width: 814px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Logo = styled.img`
    margin-top: 20px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
`
const Title = styled.span`
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 13px;
    cursor: pointer;
`
const Text = styled.span`
    text-transform: uppercase;
    margin-bottom: 48px;
    color: #FFFFFF;
    text-align: center;
    

`
const Button = styled.a`
    background-color: #05A850;
    width: 350px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 63px;
    border: 0;
    color: #fff;
    margin-bottom: 107px;
    cursor: pointer;
    text-decoration: none;
    /* :hover{
        background-color: #f8f8f8;
        color: #05A850;
        border: 1px solid #05A850;
    } */
         
`


const Home = () => {
    return (
        <>
            <Navbar />
        <Container>
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
        </Container>
        </>
    )
}

export default Home
