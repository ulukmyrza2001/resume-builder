import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
   return <InputStyled autoComplete="off" {...props} />
}

const InputStyled = styled.input`
   width: ${(props) => props.width || '100%'};
   padding: 0.7rem 1rem;
   margin-right: 10px;
   outline: none;
   color: var(--color-sub-title);
   background-color: var(--bckground);
   border: ${(props) =>
      props.isValid === false
         ? '1px solid red'
         : '1px solid var(--border-input)'};
   &:focus {
      border-color: #00c293;
   }
`

export default Input
