import React from 'react'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {Select,Option,FormStyled,FormControl,SubTxt,Title,Label,Div,Checkbox,BtnGroup,BtnBack,BtnNext} from '../../styles'
import Flex from '../../../components/UI/Flex'

const Selection = ({data,width,margin}) => {
	return (
		<Select width = {width} margin = {margin}>
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
			<Title>Education</Title>
			<SubTxt>Where did you go to school?</SubTxt>
			<FormControl>
				<Label>School Name</Label>
				<Input name='schoolName' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input name='educationCity' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input name='educationState' type='text' />
				</FormControl>
			</Div>
			<Div>
				<Checkbox type='checkbox' />
				<Label>Show country</Label>
			</Div>
			<FormControl>
				<Label>Degree</Label>
				<Selection margin = '0' width = '100%' data = {[]} />
			</FormControl>
			<FormControl>
				<Label>Field of Study</Label>
				<Input name='field' type='text' />
			</FormControl>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>Graduation Date</Label>
					<Div>
						<Selection data = {month} />
						<Selection data = {years} />
					</Div>
				</Flex>
			</Flex>
			<BtnGroup>
				<BtnBack>Back</BtnBack>
				<BtnNext>Next</BtnNext>
			</BtnGroup>
		</FormStyled>
	)
}



export default Form
