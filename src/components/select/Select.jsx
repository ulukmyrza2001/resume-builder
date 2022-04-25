import React from 'react'
import styled from 'styled-components'

const Selection = ({ data, width, margin, onChange, name, currentDate }) => {
   return (
      <SelectStyled
         name={name}
         onChange={onChange}
         width={width}
         margin={margin}
         disabled={currentDate}
      >
         {data.map((el) => (
            <Option key={el}>{el}</Option>
         ))}
      </SelectStyled>
   )
}

export const SelectStyled = styled.select`
   width: ${(props) => props.width || '150px'};
   padding: 0.7rem;
   outline: none;
   color: var(--color-sub-title);
   background-color: var(--bckground);
   margin: ${(props) => props.margin || '10px 0 0 10px'};
   border: 1px solid var(--border-input);
   &:focus {
      border-color: #00c293;
   }
`
export const Option = styled.option``

export default Selection
