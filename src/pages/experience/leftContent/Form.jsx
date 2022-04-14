import React from 'react'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {
	FormStyled,
	FormControl,
	SubTxt,
	Title,
	Label,
	Div,
	Checkbox,
	BtnGroup,
	BtnBack,
	BtnNext,
	Select,
	Option
} from '../../styles'
import Flex from '../../../components/UI/Flex'

const Selection = ({ data, width, margin }) => {
	return (
		<Select width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
	const years = generateArrayOfYears()
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
						<Selection data={month} />
						<Selection data={years} />
					</Div>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Label>End Date</Label>
					<Div>
						<Selection data={month} />
						<Selection data={years} />
					</Div>
				</Flex>
				<Flex align='center' justify='center'>
					<Checkbox type='checkbox' />
					<Label>I currently work here</Label>
				</Flex>
			</Flex>
			<BtnGroup>
				<Link to = '/contact'><BtnBack type='button'>Back</BtnBack></Link>
				<Link to ='/education'><BtnNext type = 'button'>Next</BtnNext></Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default Form
