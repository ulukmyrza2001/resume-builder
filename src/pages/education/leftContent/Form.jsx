import React from 'react'
import Input from '../../../components/UI/Input'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {Select,Option,FormStyled,FormControl,SubTxt,Title,Label,Div,Checkbox,BtnGroup,BtnBack,BtnNext} from '../../styles'
import Flex from '../../../components/UI/Flex'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
import { useDispatch } from 'react-redux'

const Selection = ({data,width,margin,onChange,name}) => {
	return (
		<Select name = {name} onChange = {onChange} width = {width} margin = {margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
	const dispatch = useDispatch()

   const saveResumeDataToStore = (dataResume) => dispatch(resumeActions.createResume(dataResume))

   const input = useInput(saveResumeDataToStore)

   const years = generateArrayOfYears()
	return (
		<FormStyled>
			<Title>Education</Title>
			<SubTxt>Where did you go to school?</SubTxt>
			<FormControl>
				<Label>School Name</Label>
				<Input onChange={input.onChange} name='schoolName' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input onChange={input.onChange} name='educationCity' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input onChange={input.onChange} name='educationState' type='text' />
				</FormControl>
			</Div>
			<Div>
				<Checkbox type='checkbox' />
				<Label>Show country</Label>
			</Div>
			<FormControl>
				<Label>Field of Study</Label>
				<Input onChange={input.onChange} name='field' type='text' />
			</FormControl>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>Graduation Date</Label>
					<Div>
						<Selection onChange={input.onChange} name = 'educationMonth' data = {month} />
						<Selection onChange={input.onChange} name = 'educationYear' data = {years} />
					</Div>
				</Flex>
			</Flex>
			<BtnGroup>
			    <Link to = '/experience'><BtnBack type='button'>Back</BtnBack></Link>
				<Link to ='/skills'><BtnNext type = 'button'>Next</BtnNext></Link>
			</BtnGroup>
		</FormStyled>
	)
}



export default Form
