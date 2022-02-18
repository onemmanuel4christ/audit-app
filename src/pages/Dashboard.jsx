import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 5px 30px;
    height: 95px;
`
const LeftSide = styled.div`    
`
const Logo = styled.img`
    width: 105px;
    height: 105px;  
    border-radius: 50%;
`
const Center = styled.div`

`
const Title = styled.h1`
    color: #05A850;
`
const RightSide = styled.div`
`
const Notification = styled.div`
    position: relative;    
`
const Badge = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
`

const MainBody = styled.div`
display: flex;
background-color: #E5E5E5;
width: 100%;
height: calc(100vh - 105px);
`
const SideBar = styled.div`
flex: 1;
max-width: 283px;
background-color: black;
height: calc(100vh - 105px);
color: #ffff;
`
const SidebarItems = styled.div`
display: flex;
flex-direction: column;
margin-left: 18px;
margin-top: 107px;
`
const SideBtnDiv = styled.div`
    width: 256px;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    :hover{
    background-color: #05A850;

    }
`

const Icon = styled.img`
width: 20px;
height: 23px;
margin-right: 26px;
`

const Action = styled.div`
    font-size: 16px;
    font-weight: 400;
`
const LogoutBtn = styled.div`
    width: 140px;
    padding: 5px;
    color: #ffff;
    border: 1px solid #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-weight: bold;
    :hover{
        background-color: #ffff;
        color: #05A850;
        border: 1px solid #05A850;
    }
`
const Contents = styled.div`
flex: 4;
`
const Calender = styled.div`
background-color: rgba(5, 168, 80, 0.1);
width: 339px;
height: calc(100vh - 105px);
flex: 1;

`
const Dashboard = () => {
  return (
      <Wrapper>
          <HeaderTop>
              <LeftSide>
                  <Logo src='./images/njc-logo.png' />
              </LeftSide>
              <Center>
                  <Title>AUDIT MANAGEMENT SYSTEM</Title>
              </Center>
              <RightSide>
                  <Notification>
                    N
                      <Badge>
                      2
                      </Badge>
                  </Notification>
              </RightSide>
          </HeaderTop>
          <MainBody>
              <SideBar>
                  <SidebarItems>
                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Overview</Action>
                        </SideBtnDiv>
                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Registration of Vehicles</Action>
                      </SideBtnDiv>
                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Insurance</Action>
                      </SideBtnDiv>
                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Drivers</Action>
                      </SideBtnDiv>
                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Filling Stations</Action>
                      </SideBtnDiv>

                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Coupons</Action>
                      </SideBtnDiv>

                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Payments</Action>
                      </SideBtnDiv>

                      <SideBtnDiv>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Audit Reports</Action>
                      </SideBtnDiv>
                      <LogoutBtn>Logout</LogoutBtn>
                  </SidebarItems>
              </SideBar>
              <Contents>Contents</Contents>
              <Calender>Calender</Calender>
          </MainBody>
         </Wrapper>
  )
}

export default Dashboard
