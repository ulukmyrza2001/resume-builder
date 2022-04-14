import React from 'react'
import Flex from '../../../components/UI/Flex'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
	FormStyled,
	FormControl,
	SubTxt,
	Title,
	Label,
	BtnGroup,
	BtnBack,
	BtnNext,
} from '../../styles'
  
const skills = ['java','javacript','python','language','asdfasdfasdfsadf','asdf','sdfsdf']

const Form = () => {
	return (
		<FormStyled>
			<Title>Skills</Title>
			<SubTxt>Hightlight 6-8 of your top skills.</SubTxt>
			<Flex wrap = 'wrap' gap = '5px'>
				{skills.map(el=>(
					<Skill key={el}>{el}</Skill>
				))}	
			</Flex>
			<FormControl>
				<Label>Skills</Label>
				<Input placeholder = 'Search skills' name='name' type='text' />
			</FormControl>
			<BtnGroup>
			    <Link to = '/education'><BtnBack type='button'>Back</BtnBack></Link>
				<Link to ='/summary'><BtnNext type = 'button'>Next</BtnNext></Link>
			</BtnGroup>
		</FormStyled>
	)
}

const Skill = styled.div`
	padding: 0.3rem 1.2rem;
	background:#2b5468;
	color:#ffffff;
	border-radius: 50px;

`

export default Form
