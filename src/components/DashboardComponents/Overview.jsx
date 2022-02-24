import React, { useState } from 'react'
import styled from 'styled-components'
import { Calendar } from "react-calendar"
import 'bootstrap/dist/css/bootstrap.css'

const Wrap = styled.div`
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: space-between; 
`

const Side = styled.div`
  position: relative;
`
const SideOpen = styled.div`
position: absolute;
width: 28px;
height: 43px;
border-radius: 5px;
background-color: #0F0F0F;
cursor: pointer;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
top: 280px;
left: 0;
color: #fff;
`
const CalenderWrapper = styled.div`
  position: relative;
  padding: 10px 10px;
  height: calc(100vh - 86px);
  padding: 10px 25px;
  width: 339px;
  max-width: 339px;
  background-color: rgba(5, 168, 80, 0.1);

`
const NotifyTitle = styled.h2`
font-weight: 700;
font-size: 24px;
margin-top: 87px;
`
const MyNotificationArea = styled.div`
  width: 100%;

`

const InfoDiv = styled.div`
  position: relative;
  width: 289px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 21px 35px;
  justify-content: start;
  background-color: #FFF;
  margin-bottom: 17px;
  border-radius: 5px;

  span{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

`
const ReadIndicator = styled.div`
position: absolute;
width: 10px;
height: 10px;
left:260px;
top: 10;
`
const Main = styled.div`

`
const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-left: 40px;
  margin-top: 50px;
  margin-bottom: 30px;
`
const StatusBar = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 24px;
`
const StatusContainer = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    height: 122px;
    background-color: #FFFFFF;
    justify-content: space-between;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
`
const StatusIcon = styled.div`
  background-color:  ${props => props.bgColor};
  width: 25px;
  height: 25px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  margin-right: 10px;
  margin-left: 10px;
  svg{
   
    border-radius: 50%;
  }
`

const StatusTitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;

`
const StatusNumber = styled.div`
  margin-right: 5px;
  font-size: 24px;
  font-weight: bold;
  
`
const Top = styled.div`
  display: flex;
`
const Body = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  justify-content: space-between;
`
const FilterSection = styled.div`
 display: flex;

  `
  const SelectBox = styled.select`
   margin-left: 10px;
   padding: 5px;
   border-radius: 5px;
   outline: none;
  border: 1px solid #C4C4C4;
   `
   const Option = styled.option`
   display: flex;
    `
  //   const ExportDiv = styled.div`
  //   background-color: #05A850;
  //   width: 157px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: 14px;
  //   font-weight: 400;
  //   padding: 15px;
  //   border-radius: 5px;
  //   gap: 13px;
  //   span{
  //     color: #FFFFFF;
  //   }
  // `
  const InputWrapper = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  margin-left: 5px;
  
  `
const Input = styled.input`
  flex:1;
  padding: 14px;
  border: 0;
  border-radius: 5px;
  outline: none;
`
const Action = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
cursor: pointer;
  width: 56px;
  background-color: #05A8501A;
  height: 51px;
  svg{
    width: 17px;
    height: 19px;
  }
`


const Overview = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [myDate, setMyDate]= useState(new Date());
let readMessage = false;
  return (
    <Wrap>
      <Main>
        <Title>
          AUDIT/Overview
        </Title>
        <Top>
        <StatusBar>

          <StatusContainer>
            <StatusIcon bgColor='rgba(188, 27, 27, 0.15)'>
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.002 9.5H17.3188M17.3188 9.5V15.5M17.3188 9.5L9.94923 16.5M26.2671 13C26.2671 19.6274 20.6108 25 13.6335 25C6.65622 25 1 19.6274 1 13C1 6.37258 6.65622 1 13.6335 1C20.6108 1 26.2671 6.37258 26.2671 13Z" stroke="#BC1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </StatusIcon>

            <StatusTitle>
              Number of Registered Vehicles
            </StatusTitle>
            
            <StatusNumber>23</StatusNumber>
          </StatusContainer>

          <StatusContainer>
            <StatusIcon bgColor='rgba(30, 188, 27, 0.15);'>
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.77778 8.25L4.86111 2.0625H20.1389L22.2222 8.25H2.77778ZM20.1389 15.125C19.5864 15.125 19.0565 14.9077 18.6658 14.5209C18.275 14.1341 18.0556 13.6095 18.0556 13.0625C18.0556 12.5155 18.275 11.9909 18.6658 11.6041C19.0565 11.2173 19.5864 11 20.1389 11C20.6914 11 21.2213 11.2173 21.612 11.6041C22.0027 11.9909 22.2222 12.5155 22.2222 13.0625C22.2222 13.6095 22.0027 14.1341 21.612 14.5209C21.2213 14.9077 20.6914 15.125 20.1389 15.125ZM4.86111 15.125C4.30858 15.125 3.77867 14.9077 3.38797 14.5209C2.99727 14.1341 2.77778 13.6095 2.77778 13.0625C2.77778 12.5155 2.99727 11.9909 3.38797 11.6041C3.77867 11.2173 4.30858 11 4.86111 11C5.41365 11 5.94355 11.2173 6.33425 11.6041C6.72495 11.9909 6.94444 12.5155 6.94444 13.0625C6.94444 13.6095 6.72495 14.1341 6.33425 14.5209C5.94355 14.9077 5.41365 15.125 4.86111 15.125ZM22.1111 1.375C21.8333 0.5775 21.0556 0 20.1389 0H4.86111C3.94444 0 3.16667 0.5775 2.88889 1.375L0 9.625V20.625C0 20.9897 0.146329 21.3394 0.406796 21.5973C0.667263 21.8551 1.02053 22 1.38889 22H2.77778C3.14613 22 3.4994 21.8551 3.75987 21.5973C4.02034 21.3394 4.16667 20.9897 4.16667 20.625V19.25H20.8333V20.625C20.8333 20.9897 20.9797 21.3394 21.2401 21.5973C21.5006 21.8551 21.8539 22 22.2222 22H23.6111C23.9795 22 24.3327 21.8551 24.5932 21.5973C24.8537 21.3394 25 20.9897 25 20.625V9.625L22.1111 1.375Z" fill="#05A850"/>
            </svg>
            </StatusIcon>

            <StatusTitle>
            Number of Vehicles
            </StatusTitle>

            <StatusNumber>23</StatusNumber>
          </StatusContainer>

          <StatusContainer>
            <StatusIcon bgColor='rgba(27, 117, 188, 0.15);'> 
            <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 15.2375C35 16.1 33.25 16.675 31.2083 16.9625C29.8958 14.5188 27.2708 12.65 24.2083 11.3562C24.5 10.925 24.7917 10.6375 25.0833 10.2063H26.25C30.7708 10.0625 35 12.7938 35 15.2375ZM9.91667 10.0625H8.75C4.22917 10.0625 0 12.7938 0 15.2375C0 16.1 1.75 16.675 3.79167 16.9625C5.10417 14.5188 7.72917 12.65 10.7917 11.3562L9.91667 10.0625ZM17.5 11.5C20.7083 11.5 23.3333 8.9125 23.3333 5.75C23.3333 2.5875 20.7083 0 17.5 0C14.2917 0 11.6667 2.5875 11.6667 5.75C11.6667 8.9125 14.2917 11.5 17.5 11.5ZM17.5 12.9375C11.5208 12.9375 5.83333 16.675 5.83333 20.125C5.83333 23 17.5 23 17.5 23C17.5 23 29.1667 23 29.1667 20.125C29.1667 16.675 23.4792 12.9375 17.5 12.9375ZM25.8125 8.625H26.25C28.7292 8.625 30.625 6.75625 30.625 4.3125C30.625 1.86875 28.7292 0 26.25 0C25.5208 0 24.9375 0.14375 24.3542 0.43125C25.5208 1.86875 26.25 3.7375 26.25 5.75C26.25 6.75625 26.1042 7.7625 25.8125 8.625ZM8.75 8.625H9.1875C8.89583 7.7625 8.75 6.75625 8.75 5.75C8.75 3.7375 9.47917 1.86875 10.6458 0.43125C10.0625 0.14375 9.47917 0 8.75 0C6.27083 0 4.375 1.86875 4.375 4.3125C4.375 6.75625 6.27083 8.625 8.75 8.625Z" fill="#1B75BC"/>
            </svg>
            </StatusIcon>

            <StatusTitle>
            Number of Drivers
            </StatusTitle>
            <StatusNumber>23</StatusNumber>
          </StatusContainer>
          
          <StatusContainer>
            <StatusIcon bgColor='rgba(27, 117, 188, 0.15);'>
            <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 15.2375C35 16.1 33.25 16.675 31.2083 16.9625C29.8958 14.5188 27.2708 12.65 24.2083 11.3562C24.5 10.925 24.7917 10.6375 25.0833 10.2063H26.25C30.7708 10.0625 35 12.7938 35 15.2375ZM9.91667 10.0625H8.75C4.22917 10.0625 0 12.7938 0 15.2375C0 16.1 1.75 16.675 3.79167 16.9625C5.10417 14.5188 7.72917 12.65 10.7917 11.3562L9.91667 10.0625ZM17.5 11.5C20.7083 11.5 23.3333 8.9125 23.3333 5.75C23.3333 2.5875 20.7083 0 17.5 0C14.2917 0 11.6667 2.5875 11.6667 5.75C11.6667 8.9125 14.2917 11.5 17.5 11.5ZM17.5 12.9375C11.5208 12.9375 5.83333 16.675 5.83333 20.125C5.83333 23 17.5 23 17.5 23C17.5 23 29.1667 23 29.1667 20.125C29.1667 16.675 23.4792 12.9375 17.5 12.9375ZM25.8125 8.625H26.25C28.7292 8.625 30.625 6.75625 30.625 4.3125C30.625 1.86875 28.7292 0 26.25 0C25.5208 0 24.9375 0.14375 24.3542 0.43125C25.5208 1.86875 26.25 3.7375 26.25 5.75C26.25 6.75625 26.1042 7.7625 25.8125 8.625ZM8.75 8.625H9.1875C8.89583 7.7625 8.75 6.75625 8.75 5.75C8.75 3.7375 9.47917 1.86875 10.6458 0.43125C10.0625 0.14375 9.47917 0 8.75 0C6.27083 0 4.375 1.86875 4.375 4.3125C4.375 6.75625 6.27083 8.625 8.75 8.625Z" fill="#1B75BC"/>
            </svg>
            </StatusIcon>

            <StatusTitle>
            Number of Drivers
            </StatusTitle>
            <StatusNumber>23</StatusNumber>
          </StatusContainer>
        </StatusBar>
        </Top>
        
          <Title>
          Management History
          </Title>
          <Body>
             <FilterSection>
              <InputWrapper>
                  <Input type='text' placeholder='Search' />
                  <Action>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90106 15.4259C3.08971 15.4259 0 11.9727 0 7.71295C0 3.45321 3.08971 0 6.90106 0C10.7124 0 13.8021 3.45321 13.8021 7.71295C13.8021 9.49533 13.2612 11.1365 12.3528 12.4426L17 17.6365L15.7801 19L11.1328 13.806C9.96424 14.8213 8.49582 15.4259 6.90106 15.4259ZM12.0769 7.71295C12.0769 10.9078 9.75958 13.4977 6.90106 13.4977C4.04255 13.4977 1.72527 10.9078 1.72527 7.71295C1.72527 4.51814 4.04255 1.92824 6.90106 1.92824C9.75958 1.92824 12.0769 4.51814 12.0769 7.71295Z" fill="#8692A6"/>
                    </svg>
                  </Action>
              </InputWrapper>
              <SelectBox>
                <Option value="">Select All</Option>
              </SelectBox>
              
            </FilterSection>
            {/* <ExportDiv>
              <span>Export file</span>
              <span>
                <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 3.2538V12.75H6.125V3.2538L3.28737 6.01035L2.05012 4.80845L7 0L11.9499 4.80845L10.7126 6.01035L7.875 3.2538ZM0 11.9H1.75V15.3H12.25V11.9H14V15.3C14 16.235 13.2125 17 12.25 17H1.75C0.7875 17 0 16.1814 0 15.3V11.9Z" fill="white"/>
                </svg>
              </span>
            </ExportDiv> */}
          </Body>
          <div style={{
            margin: '35px',
            paddingBottom: '10px',
          }}>
            <table className='table'>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>VEHICLE TYPE</th>
                  <th>VEHICLE MODEL</th>
                  <th>YEAR OF PURCHASE</th>
                  <th>REGISTRATION NUMBER</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                 <tr>
                  <td><input type="checkbox" /></td>
                  <td>suv</td>
                  <td>suv</td>
                  <td>12/09/2021</td>
                  <td>ABC 123D</td>
                  <td>3,500,000</td>
                  <td>Pending</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div> 
        </Main>
      <Side>
            <SideOpen onClick={() =>setSideOpen(!sideOpen)}> 
                  <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12109 1.56441L4.70688 -2.8672e-05L-0.00022627 5.20708L4.70688 10.4142L6.12109 8.84975L2.8282 5.20708L6.12109 1.56441Z" fill="white"/>
                  </svg>
              </SideOpen>
          
          <CalenderWrapper>
            <>
                <Calendar 
                onChange={setMyDate} 
                value={myDate} 
                />
            </>
          <MyNotificationArea>
            <NotifyTitle>Notifications</NotifyTitle>
            <InfoDiv>
            {readMessage ? 
            
            <ReadIndicator>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41667 0H0.583333C0.428624 0 0.280251 0.0614581 0.170854 0.170854C0.0614581 0.280251 0 0.428624 0 0.583333V6.41667C0 6.57138 0.0614581 6.71975 0.170854 6.82915C0.280251 6.93854 0.428624 7 0.583333 7H6.41667C6.57138 7 6.71975 6.93854 6.82915 6.82915C6.93854 6.71975 7 6.57138 7 6.41667V0.583333C7 0.428624 6.93854 0.280251 6.82915 0.170854C6.71975 0.0614581 6.57138 0 6.41667 0V0ZM2.91667 5.10417L1.45833 3.65837L1.92208 3.20833L2.91667 4.18425L5.07762 2.04167L5.54167 2.50162L2.91667 5.10417Z" fill="#05A850"/>
              </svg>
            </ReadIndicator> 
            : 
            <ReadIndicator>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#BC1B1B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20004 3.5L2 2.29996L2.29996 2L3.5 3.20004L4.70004 2L5 2.29996L3.79996 3.5L5 4.70004L4.70004 5L3.5 3.79996L2.29996 5L2 4.70004L3.20004 3.5Z" fill="white"/>
              </svg>
            </ReadIndicator>}
            <span>A file is sent from Admin.</span>
              <span style={{
                fontSize: '14px',
                color: '#0F0F0F80',
              }}>{myDate.toUTCString()}</span>
            </InfoDiv>
            <InfoDiv>
            {readMessage ? 
            
            <ReadIndicator>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41667 0H0.583333C0.428624 0 0.280251 0.0614581 0.170854 0.170854C0.0614581 0.280251 0 0.428624 0 0.583333V6.41667C0 6.57138 0.0614581 6.71975 0.170854 6.82915C0.280251 6.93854 0.428624 7 0.583333 7H6.41667C6.57138 7 6.71975 6.93854 6.82915 6.82915C6.93854 6.71975 7 6.57138 7 6.41667V0.583333C7 0.428624 6.93854 0.280251 6.82915 0.170854C6.71975 0.0614581 6.57138 0 6.41667 0V0ZM2.91667 5.10417L1.45833 3.65837L1.92208 3.20833L2.91667 4.18425L5.07762 2.04167L5.54167 2.50162L2.91667 5.10417Z" fill="#05A850"/>
              </svg>
            </ReadIndicator> 
            : 
            <ReadIndicator>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="7" height="7" fill="#BC1B1B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20004 3.5L2 2.29996L2.29996 2L3.5 3.20004L4.70004 2L5 2.29996L3.79996 3.5L5 4.70004L4.70004 5L3.5 3.79996L2.29996 5L2 4.70004L3.20004 3.5Z" fill="white"/>
              </svg>
            </ReadIndicator>}
            <span>A file is sent from Admin.</span>
              <span style={{
                fontSize: '14px',
                color: '#0F0F0F80',
              }}>{myDate.toUTCString()}</span>
            </InfoDiv>
          </MyNotificationArea>
          </CalenderWrapper>    
      </Side> 
    </Wrap>
  )
}

export default Overview
