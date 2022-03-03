import React, {useState} from 'react'
import styled from 'styled-components'
import { Close, MenuOutlined, NotificationsNone } from '@material-ui/icons';
import Overview from '../components/DashboardComponents/Overview';
import Registeration from '../components/DashboardComponents/Registeration';
import Insurance from '../components/DashboardComponents/Insurance';
import Drivers from '../components/DashboardComponents/Drivers';
import FillingStation from '../components/DashboardComponents/FillingStation';
import Coupon from '../components/DashboardComponents/Coupon';
import Payment from '../components/DashboardComponents/Payment';
import Reports from '../components/DashboardComponents/Reports';
import { Link } from 'react-router-dom';

const WrapperDiv = styled.div`
    width: 100%;
    height: 100%;
   
`
const HeaderTop = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    margin: 0 90px;
   
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
    @media only screen and (max-width: 800px) {
     font-size: 1rem;
     font-weight: 600;
     margin-right: 1rem;
    }
`
const RightSide = styled.div`
display: flex;
align-items: center;
span{
   svg{
    @media only screen and (max-width: 800px) {
     display: none;
    }
   }
}

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
    @media only screen and (max-width: 800px) {
     display: none;
    }
`
const UserAvater = styled.img`
    
`

const Greetings = styled.span`
    font-size: 18px;
    color: #0F0F0F;
    font-weight: 400;
    margin-right: 10px;
    @media only screen and (max-width: 800px) {
     display: none;
    }
`

const MainBody = styled.div`
display: flex;
height: calc(100vh - 86px);
background-color: #E5E5E5;
`
const SideBar = styled.div`
position: relative;
background-color: black;
height: calc(100vh - 86px);
color: #ffff;
position: sticky;
left: 0;
top: 86px;

    
`
const SideBarMobile = styled.div`
position: relative;
background-color: black;
height: calc(100vh - 86px);
color: #ffff;
position: sticky;
left: 0;
top: 86px;
@media only screen and (max-width: 800px) {
     display: none;
    }
`
const Hamburger = styled.div`
position: absolute;
width: 20px;
height: 20px;
top: 15px;
left: 70%;
cursor: pointer;
color: #FFFFFF;
@media only screen and (max-width: 800px) {
display: none;
}
`
const HmLine = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: #e7e2e2dd;
    margin-bottom: 4px;
`

const SidebarItems = styled.div`
display: flex;
flex-direction: column;
margin-left: 2px;
margin-top: 86px;
@media only screen and (max-width: 800px) {
    margin-top: 2rem;

    }
`
const SideBtnDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    border-radius: 5px;
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
    width: 170px;
    font-size: 14px;
    font-weight: 400;
    :active{
        background-color: #05A850;
    }
   
`
const OutButton = styled.div`
   margin-top: 30px;
   width: 25px;
   height: 25px;
   border-radius: 50%;
   cursor: pointer;
   margin-left: 5px;
`
const LogoutBtn = styled.div`
    width: 140px;
    padding: 5px;
    color: #ffff;
    border: 1px solid #FFFFFF;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    margin-top: 30px;
    margin-left: 5px;

    cursor: pointer;
    font-weight: bold;
    :hover{
        background-color: #ffff;
        color: #05A850;
        border: 1px solid #05A850;
    }
`
const Contents = styled.div`
width: 100%;
height: 100%;
overflow: auto;
display: flex;
justify-content: space-between;
`

const MobileMenu = styled.div`
    @media only screen and (min-width: 800px) {
        display: none;
   }
`
const Dashboard = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [component, setComponent] = useState(<Overview />)
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();
    const styles = {
      fontSize: 24,
      fontWeight: 'bold',
    }
  
    if (hours < 12) {
      timeOfDay = 'Morning';
      styles.color = "#D90000";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = 'Afternoon';
      styles.color = "#05A850";
    } else {
      timeOfDay = 'Night';
      styles.color = "#05A850";
    }
   
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
      <WrapperDiv>
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
                  <Greetings style={styles}>Good {timeOfDay}!</Greetings> 
                  <span style={{
                      cursor: 'pointer',
                      
                  }}>
                      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H10L5 5L0 0Z" fill="#0F0F0F" />
                      </svg>
                </span>
                      <MobileMenu  onClick={() =>{setMobileOpen(!mobileOpen)
                                            setMenuOpen(true)
                                    }}>
                                {mobileOpen ?<MenuOutlined /> : <Close />}  
                      </MobileMenu>
              </RightSide>
          </HeaderTop>
          <MainBody>
              {!mobileOpen ?
              <SideBar>
              {!menuOpen ?  <Hamburger onClick={() =>setMenuOpen(!menuOpen)}>
               <HmLine />
               <HmLine />
               <HmLine />
               </Hamburger> 
               : <Hamburger onClick={() =>setMenuOpen(!menuOpen)
              
               }>
                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z" fill="white" fill-opacity="0.7"/>
                 </svg>

               </Hamburger>
               }
                     <SidebarItems>
                     <SideBtnDiv onClick={() => clickHandler("overview")}>
                       <Icon src="./images/btn-icon.svg" />
                     {menuOpen && <Action>Overview</Action>}
                     <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("registeration")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Registration of Vehicles</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("insurance")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Insurance</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("drivers")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Drivers</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("filling-station")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Filling Stations</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("coupon")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Coupons</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("payments")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Payments</Action>}
                             <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("reports")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Audit Reports</Action>}
                             <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
               </SidebarItems>
                     {!menuOpen ? 
                             <Link to='/'> <OutButton>
                                 <Icon src="./images/logout-rounded.png" />
                             </OutButton> </Link>
                            
                         : <Link to='/'>
                         <LogoutBtn>Logout</LogoutBtn>
                         </Link>
                     }
                 </SideBar> :

                 <SideBarMobile>
                         <SidebarItems>
                     <SideBtnDiv onClick={() => clickHandler("overview")}>
                       <Icon src="./images/btn-icon.svg" />
                     {menuOpen && <Action>Overview</Action>}
                     <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("registeration")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Registration of Vehicles</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("insurance")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Insurance</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("drivers")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Drivers</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
                   <SideBtnDiv onClick={() => clickHandler("filling-station")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Filling Stations</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("coupon")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Coupons</Action>}
                       <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("payments")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Payments</Action>}
                             <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>

                   <SideBtnDiv onClick={() => clickHandler("reports")}>
                       <Icon src="./images/btn-icon.svg" />
                       {menuOpen && <Action>Audit Reports</Action>}
                             <>
                             <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M-3.86836e-07 2.15022L1.41421 0.585787L6.12132 5.79289L1.41421 11L-6.83836e-08 9.43557L3.29289 5.79289L-3.86836e-07 2.15022Z" fill="white"/>
                             </svg>
                             </>
                   </SideBtnDiv>
               </SidebarItems>
                     {!menuOpen ? 
                         <Link to='/' style={{
                             textDecoration: 'none',
                             color: 'inherit'
                         }}>
                             <OutButton>
                                 <Icon src="./images/logout-rounded.png" />
                             </OutButton> 
                         </Link>
                     

                         : 
                          <Link to='/' style={{
                             textDecoration: 'none',
                             color: 'inherit'
                         }}>
                              <LogoutBtn>Logout</LogoutBtn>

                          </Link>
                         
                     }
                 </SideBarMobile>
                 }
            <Contents>
                  {component}
              </Contents>
          </MainBody>
         </WrapperDiv>
  )
}

export default Dashboard
