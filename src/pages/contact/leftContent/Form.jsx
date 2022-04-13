import React from 'react'
import Input from '../../../components/UI/Input'
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
	return (
		<FormStyled>
			<Title>Let's complete your Resume Heading</Title>
			<SubTxt>How do you want employers to contact you?</SubTxt>
			<FormControl>
				<Label>Name</Label>
				<Input name='name' type='text' />
			</FormControl>
			<FormControl>
				<Label>Address</Label>
				<Input name='address' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>City</Label>
					<Input name='city' type='text' width='220px' />
				</FormControl>
				<FormControl>
					<Label>State</Label>
					<Input name='' type='text' width='100px' />
				</FormControl>
				<FormControl>
					<Label>ZIP code </Label>
					<Input name='zip' type='text' />
				</FormControl>
			</Div>
			<Div>
				<Checkbox type='checkbox' />
				<Label>Show country</Label>
			</Div>
			<Div>
				<FormControl>
					<Label>Email</Label>
					<Input name='email' type='email' width='260px' />
				</FormControl>
				<FormControl>
					<Label>Phone</Label>
					<Input name='phone' type='number' />
				</FormControl>
			</Div>
			<BtnGroup>
				<BtnBack>Back</BtnBack>
				<BtnNext>Nexts</BtnNext>
			</BtnGroup>
		</FormStyled>
	)
}

export default Form
