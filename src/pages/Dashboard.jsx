import React, {useState} from 'react'
import styled from 'styled-components'
import { NotificationsNone } from '@material-ui/icons';
import Overview from '../components/DashboardComponents/Overview';
import Registeration from '../components/DashboardComponents/Registeration';
import Insurance from '../components/DashboardComponents/Insurance';
import Drivers from '../components/DashboardComponents/Drivers';
import FillingStation from '../components/DashboardComponents/FillingStation';
import Coupon from '../components/DashboardComponents/Coupon';
import Payment from '../components/DashboardComponents/Payment';
import Reports from '../components/DashboardComponents/Reports';

const HeaderTop = styled.div`
    height: 86px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
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
display: flex;
align-items: center;
`
const Notification = styled.div`
    position: relative;  
    width: 28px;
    height: 23px;  
    margin-right: 25px;
`
const Badge = styled.span`
    position: absolute;
    top: -5px;
    right: -1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #BC1B1B;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFF;
    font-size: 10px;
    font-weight: 700;
`
const UserImageHolder = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color:rgba(5, 168, 80, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const UserAvater = styled.img`
`

const Greetings = styled.span`
    font-size: 18px;
    color: #0F0F0F;
    font-weight: 400;
    margin-right: 10px;
`

const MainBody = styled.div`
display: flex;
height: calc(100vh - 86px);
background-color: #E5E5E5;
`
const SideBar = styled.div`
width: 200px;
background-color: black;
height: calc(100vh - 86px);
color: #ffff;
position: sticky;
left: 0;
top: 86px;
`
const SidebarItems = styled.div`
display: flex;
flex-direction: column;
margin-left: 2px;
margin-top: 86px;
`
const SideBtnDiv = styled.div`
    width: 180px;
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
    margin-left: 10px;

`

const Action = styled.div`
    font-size: 14px;
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
    cursor: pointer;
    font-weight: bold;
    :hover{
        background-color: #ffff;
        color: #05A850;
        border: 1px solid #05A850;
    }
`
const Contents = styled.div`
width: calc(100vw - 238px);
display: flex;
/* align-items: center; */
justify-content: space-between;
`

const Dashboard = () => {
    const [component, setComponent] = useState(<Overview />)

     const clickHandler = (event) => {
         if (event === "overview") {
            setComponent(<Overview />);
            
         } else if (event ==="registeration" ){
             setComponent(<Registeration />);

         } else if (event === "insurance"){
             setComponent(<Insurance />);
         } else if (event === "drivers") {
             setComponent(<Drivers />);

         } else if (event === "filling-station") {
             setComponent(<FillingStation />);

         } else if (event === "coupon") {
             setComponent(<Coupon />);

         } else if (event === "payments") {
             setComponent(<Payment />);

         } else {
             setComponent(<Reports />);

         }
    }
  return (
      <>
          <HeaderTop>
              <LeftSide>
                  <Logo src='./images/njc-logo.png' />
              </LeftSide>
              <Center>
                  <Title>AUDIT MANAGEMENT SYSTEM</Title>
              </Center>
              <RightSide>
                  <Notification>
                      <NotificationsNone />
                      <Badge>2</Badge>
                  </Notification>
                  <UserImageHolder>
                      <UserAvater src="./images/avater.svg" alt="avater" />
                  </UserImageHolder>
                  <Greetings>Good Morning!</Greetings> 
                  <span style={{
                      cursor: 'pointer',
                      
                  }}>
                      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H10L5 5L0 0Z" fill="#0F0F0F" />
                      </svg>
                </span>
              </RightSide>
          </HeaderTop>
          <MainBody>
              <SideBar>
                  <SidebarItems>
                      <SideBtnDiv onClick={() => clickHandler("overview")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Overview</Action>
                      </SideBtnDiv>
                      <SideBtnDiv onClick={() => clickHandler("registeration")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Registration of Vehicles</Action>
                      </SideBtnDiv>
                      <SideBtnDiv onClick={() => clickHandler("insurance")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Insurance</Action>
                      </SideBtnDiv>
                      <SideBtnDiv onClick={() => clickHandler("drivers")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Drivers</Action>
                      </SideBtnDiv>
                      <SideBtnDiv onClick={() => clickHandler("filling-station")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Filling Stations</Action>
                      </SideBtnDiv>

                      <SideBtnDiv onClick={() => clickHandler("coupon")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Coupons</Action>
                      </SideBtnDiv>

                      <SideBtnDiv onClick={() => clickHandler("payments")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Payments</Action>
                      </SideBtnDiv>

                      <SideBtnDiv onClick={() => clickHandler("reports")}>
                          <Icon src="./images/btn-icon.svg" />
                          <Action>Audit Reports</Action>
                      </SideBtnDiv>
                      <LogoutBtn>Logout</LogoutBtn>
                  </SidebarItems>
              </SideBar>
              <Contents>
                  {component}
              </Contents>
          </MainBody>
        
         </>
  )
}

export default Dashboard
