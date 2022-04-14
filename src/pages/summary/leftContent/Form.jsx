import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { FormStyled, SubTxt, Title } from '../../styles'
import Flex from '../../../components/UI/Flex'

const Form = () => {
	const [value, setValue] = useState([])
	const d = (e) => {
		setValue(e.target.value.split(/\n/))
	}
	return (
		<FormStyled>
			<Title>Professional Summary</Title>
			<SubTxt>Finish your resue with short summary</SubTxt>
			<AddSkills>
				<Flex align='center' justify='end'>
					<AiOutlinePlusCircle />
					Add Pre-written Examples
				</Flex>
			</AddSkills>
			<Textarea
				placeholder='Click here to write you skills. Insert our pre-written examples with the Add Button'
				onChange={d}
				cols='60'
				rows='15'
			></Textarea>
		</FormStyled>
	)
}

const Textarea = styled.textarea`
	width: 100%;
	padding: 0.7rem 1rem;
	outline: none;
	resize: none;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	border: 1px solid #cacaca;
	line-height: 20px;
	&:focus {
		border-color: #00c293;
	}
`
const AddSkills = styled.h4`
	color: #00c293;
	cursor: pointer;
	margin-bottom: 3px;
`

export default Form
