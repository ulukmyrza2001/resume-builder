import React from 'react'
import styled from 'styled-components'

const Selection = ({ data, width, margin, onChange, name }) => {
   return (
      <SelectStyled
         name={name}
         onChange={onChange}
         width={width}
         margin={margin}
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
   margin: ${(props) => props.margin || '10px 0 0 10px'};
   border: 1px solid #cacaca;
   &:focus {
      border-color: #00c293;
   }
`
export const Option = styled.option``

export default Selection