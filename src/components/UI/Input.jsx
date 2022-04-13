import React from 'react'
import styled from 'styled-components'
const Input = ({ width, type, value, onChange, name }) => {
	return (
		<InputStyled
      autoComplete='off'
			name={name}
			value={value}
			onChange={onChange}
			type={type}
			width={width}
		/>
	)
}
const InputStyled = styled.input`
	width: ${(props) => props.width || '100%'};
	padding: 0.7rem 1rem;
	margin-right: 10px;
	outline: none;
	border: 1px solid #cacaca;
	&:focus {
		border-color: #00c293;
	}
`

export default Input
