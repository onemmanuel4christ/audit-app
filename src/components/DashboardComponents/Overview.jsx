import React, { useState } from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar';


const Wrap = styled.div`
display: flex;
`
const Main = styled.div`
flex: 3;

`
const Side = styled.div`
flex: 1;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-left: 40px;
  margin-top: 50px;
`
const StatusBar = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 24px;
`
const StatusContainer = styled.div`
    display: flex;
    align-items: center;
    width: 295px;
    height: 122px;
    background-color: #FFFFFF;
    justify-content: space-between;
    margin-right: 15px;
`
const StatusIcon = styled.div`
  background-color: rgba(188, 27, 27, 0.15);
  width: 50px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 10px;

`
const StatusTitle = styled.div`
  flex-wrap: wrap;
  margin-right: 20px;
  font-weight: bold;

`
const StatusNumber = styled.div`
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
  
`

const Calender = styled.div`
  background-color: rgba(5, 168, 80, 0.1);
  height: calc(100vh - 105px);
`
const CalenderWrapper = styled.div`
  padding: 10px;
`
const Overview = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Wrap>
      <Main>
        <Title>
          Audit/Overview
        </Title>
        <StatusBar>
          <StatusContainer>
            <StatusIcon>
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
          </StatusContainer>
          <StatusContainer>
          </StatusContainer>
        </StatusBar>
      </Main>
      <Side>
        <Calender>
          <CalenderWrapper>
            <Calendar onChange={onChange} value={value}/>
          </CalenderWrapper>
        </Calender>
      </Side>
     
    </Wrap>
  )
}

export default Overview
