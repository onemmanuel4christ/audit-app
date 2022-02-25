import React from 'react'

import styled from 'styled-components';
// import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
const Wrapper = styled.div`
width: 100%;
`
const Title = styled.div`
font-weight: 700;
  font-size: 16px;
  margin-left: 40px;
  margin-top: 50px;
  margin-bottom: 30px;

`
const Form = styled.form`
    padding: 10px 35px;
    margin-left: 35px;
    margin-right: 35px;
    background-color: #FFFFFF;

`
const InnputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* gap: 23px; */

`
const InputArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

`

const Input= styled.input`
    padding:10px 10px;
    width: 93%;
    margin-top: 10px;
    margin-right: 23px;
    margin-bottom: 40px;
    border: 1px solid #0F0F0F80;
    outline: none;
    border-radius: 5px;
    :placeholder{
        color: #0F0F0F33;
        font-weight: 400;
        font-size: 12px;
    }
`
const FileArea= styled.div`
 display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 35px;
  span{
      color: #05A850;
      font-size: 14px;
      font-weight: 400;
  }
`
const FileLabel= styled.label`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 10px 20px;
 margin-left: 10px;
 background-color: #C4C4C4;
 border-radius: 5px;
 font-size: 18px;
 font-weight: 400;
 color: #FFFFFF;
 cursor: pointer;
 :hover{
    background-color: #ffff;
    color: #000000;  
    border: 2px solid #05A850;  
 }
`

const Label = styled.label`
    font-weight: 700;
    font-size: 14px;
`
const SaveDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 35px;

`
const SaveButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 143px;
 font-weight: 400;
 font-size: 18px;
 color: #05A850;
 padding: 10px;
 border: 1px solid #05A850;
 border-radius: 5px;
 cursor: pointer;
 :hover{
     background-color: #05A850;
     color: white;
 }


`
 const Drivers = () => {
    
    return(
        <Wrapper>
                <Title>Drivers</Title>
                <Form>
                    <InnputContainer>
                            <InputArea>
                                <FileArea>
                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2914 7.67513L8.82491 15.9672C7.7744 17.5607 5.56492 17.9558 3.88753 16.85C2.21013 15.7442 1.70239 13.5578 2.7529 11.9643L8.6947 2.95118C9.00987 2.47309 9.51205 2.14637 10.0908 2.04291C10.6695 1.93944 11.2773 2.06769 11.7806 2.39945C12.2838 2.73121 12.6412 3.23931 12.7742 3.81196C12.9072 4.3846 12.8049 4.9749 12.4897 5.45299L7.49859 13.024C7.23715 13.4206 6.6817 13.5199 6.26425 13.2447C5.8468 12.9695 5.71915 12.4199 5.98059 12.0233L10.4964 5.17332L9.35786 4.42277L4.84209 11.2728C4.52691 11.7509 4.42457 12.3411 4.55756 12.9138C4.69055 13.4864 5.04798 13.9945 5.55123 14.3263C6.05448 14.6581 6.66232 14.7863 7.24103 14.6828C7.81974 14.5794 8.32192 14.2527 8.6371 13.7746L13.6282 6.20353C14.6787 4.61001 14.171 2.42368 12.4936 1.31788C10.8162 0.212075 8.60671 0.607108 7.5562 2.20063L1.61439 11.2138C0.169347 13.4058 0.867145 16.4105 3.17451 17.9316C5.48188 19.4527 8.51837 18.9098 9.96341 16.7178L15.4299 8.42567L14.2914 7.67513Z" fill="#05A850"/>
                                    </svg>
                                    <span>Attach file</span>
                                    <FileLabel htmlFor="files">Browse...</FileLabel>
                                    <input type="file" id='files' hidden={true} />
                                </FileArea>    
                            </InputArea>
                    </InnputContainer>

                    <InnputContainer>
                            <InputArea>
                            <Label>Enter Driver’s Name</Label>
                            <Input type="text" placeholder='Drivers name' name='drivername'/>
                            </InputArea>
                            <InputArea>
                                <Label>What is the car number? *</Label>
                            <Input type="text" placeholder='car No.' name='carno'/>
                                   
                            </InputArea>
                            
                   </InnputContainer>               
                   <InnputContainer>
                        <InputArea>
                            <Label>Enter Driving Licence Number</Label>
                            <Input type="text" placeholder='Licence Number' name='licenceno'/>

                            </InputArea>

                            <InputArea>
                                <Label>Enter Telephone number</Label>
                                <Input type="number" placeholder='Enter Telephone number' name='telno'/>

                            </InputArea>
                   </InnputContainer>
                            <SaveDiv>
                                <SaveButton>Save</SaveButton>
                            </SaveDiv>
                   
                </Form>
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
              </tbody>
            </table>
          </div>
        </Wrapper>
    )
}

export default Drivers;
