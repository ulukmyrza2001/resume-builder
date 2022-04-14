import React from 'react'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {FormStyled,FormControl,SubTxt,Title,Label,Div,Checkbox,BtnGroup,BtnBack,BtnNext} from '../../styles'
import Flex from '../../../components/UI/Flex'

const Month = () => {
	return (
		<Select>
			{month.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}
const Year = () => {
	const years = generateArrayOfYears()
	return (
		<Select>
			{years.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
	return (
		<FormStyled>
			<Title>Work Experience</Title>
			<SubTxt>Start with you most recent work experience</SubTxt>
			<FormControl>
				<Label>Job Title</Label>
				<Input name='name' type='text' />
			</FormControl>
			<FormControl>
				<Label>Employer</Label>
				<Input name='address' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input name='city' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input name='' type='text' />
				</FormControl>
			</Div>
			<Div>
				<Checkbox type='checkbox' />
				<Label>Show country</Label>
			</Div>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>Start Date</Label>
					<Div>
						<Month />
						<Year />
					</Div>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Label>End Date</Label>
					<Div>
						<Month />
						<Year />
					</Div>
				</Flex>
				<Flex align='center' justify='center'>
					<Checkbox type='checkbox' />
					<Label>I currently work here</Label>
				</Flex>
			</Flex>
			<BtnGroup>
				<BtnBack>Back</BtnBack>
				<BtnNext>Next</BtnNext>
			</BtnGroup>
		</FormStyled>
	)
}

const Select = styled.select`
	width: 150px;
	padding: 0.7rem;
	outline: none;
	margin: 10px 0 0 10px;
	border: 1px solid #cacaca;
	&:focus {
		border-color: #00c293;
	}
`
const Option = styled.option``

export default Form
