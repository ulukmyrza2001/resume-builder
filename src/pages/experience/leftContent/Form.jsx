import React from 'react'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import useInput from '../../../hooks/useInput'
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

const Selection = ({ data, width, margin,name,onChange }) => {
	return (
		<Select onChange={onChange} name={name} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
	const years = generateArrayOfYears()
   const input = useInput()
	return (
		<FormStyled>
			<Title>Work Experience</Title>
			<SubTxt>Start with you most recent work experience</SubTxt>
			<FormControl>
				<Label>Job Title</Label>
				<Input onChange={input.onChange} name='jobTitle' type='text' />
			</FormControl>
			<FormControl>
				<Label>Employer</Label>
				<Input onChange={input.onChange} name='employer' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input onChange={input.onChange} name='experienceCity' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input onChange={input.onChange} name='experienceState' type='text' />
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
						<Selection onChange={input.onChange} name = 'startMonth' data={month} />
						<Selection onChange={input.onChange} name = 'startYears' data={years} />
					</Div>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Label>End Date</Label>
					<Div>
						<Selection onChange={input.onChange} name = 'endMonth' data={month} />
						<Selection onChange={input.onChange} name = 'endYear' data={years} />
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
