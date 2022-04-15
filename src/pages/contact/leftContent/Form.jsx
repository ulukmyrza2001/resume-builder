import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../../../components/UI/Input'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
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
} from '../../styles'

const Form = () => {
	const dispatch = useDispatch()
	const input = useInput()
	useEffect(() => {
		dispatch(resumeActions.createResume(input.values))
	}, [input.values])

	console.log(input)
	return (
		<FormStyled>
			<Title>Let's complete your Resume Heading</Title>
			<SubTxt>How do you want employers to contact you?</SubTxt>
			<FormControl>
				<Label>Name</Label>
				<Input
					onChange={input.onChange}
					name='name'
					value={input.name}
				/>
			</FormControl>
			<FormControl>
				<Label>Address</Label>
				<Input onChange={input.onChange} name='address' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input
						onChange={input.onChange}
						name='city'
						width='220px'
					/>
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input
						onChange={input.onChange}
						name='state'
						width='100px'
					/>
				</FormControl>
				<FormControl>
					<Label>ZIP code </Label>
					<Input onChange={input.onChange} name='zip' />
				</FormControl>
			</Div>
			<Div>
				<Checkbox type='checkbox' />
				<Label>Show country</Label>
			</Div>
			<Div>
				<FormControl>
					<Label>Email</Label>
					<Input
						onChange={input.onChange}
						name='email'
						type='email'
						width='260px'
					/>
				</FormControl>
				<FormControl>
					<Label>Phone</Label>
					<Input
						onChange={input.onChange}
						name='phone'
						type='number'
					/>
				</FormControl>
			</Div>
			<BtnGroup>
				<BtnBack>Back</BtnBack>
				<Link to='/experience'>
					<BtnNext type='button'>Next</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default Form
