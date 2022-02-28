import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import styled from 'styled-components'


const FilterSection = styled.div`
 display: flex;
 
`
const InputWrapper = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  margin-left: 5px;
  @media only screen and (max-width: 800px) {
     width: 100%;
    }
  
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
export const GlobalFilter = ({filter, setFilter}) => {
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce(value =>{
        setFilter(value || undefined)
    }, 1000)
  return (
    <>  
    <FilterSection> 
     <InputWrapper>
         <Input 
            type='text' 
            placeholder='Search' 
            value={value || ""} 
            onChange={(e) =>{
                setValue(e.target.value)
                onChange(e.target.value)
            }}/>
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
 </>
  )
}
  