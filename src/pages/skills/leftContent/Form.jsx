import React, { useState } from 'react'
import Flex from '../../../components/UI/Flex'
import Input from '../../../components/UI/Input'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useInput from '../../../hooks/useInput'
import { IoIosClose } from 'react-icons/io'
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
import { useDispatch, useSelector } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import SearchSkills from './SearchSkills'

const Skills = ({ skills, onClick }) => {
	return skills.map((el) => (
		<Skill key={el.id}>
			{el.skill}&nbsp;
			<IoIosClose onClick={() => onClick(el.id)} className='icon' />
		</Skill>
	))
}

const Form = () => {
	const dispatch = useDispatch()
	const skills = useSelector((state) => state.resume.resumeData.skills)
	const input = useInput()
	const [showSearchList,setShowSearchList] = useState(true)

	const handleSubmit = () => {
		dispatch(resumeActions.createSkill(input.values))
		input.onClear()
		setShowSearchList(true)
	}
	const deleteSkills = (id) => dispatch(resumeActions.deleteSkill(id))
	
	const addSkillsSearchingHandler = (e) =>{
		input.setValues(e.target.textContent)
		setShowSearchList(false)
	}
	return (
		<FormStyled>
			<Title>Skills</Title>
			<SubTxt>Hightlight 6-8 of your top skills.</SubTxt>
			<Flex wrap='wrap' gap='5px'>
				<Skills skills={skills} onClick={deleteSkills} />
			</Flex>
			<FormControl>
				<Label>Skills</Label>
				<Flex>
					<Input
						value={input.values}
						placeholder='Search skills/add skills'
						name='skills'
						onChange={input.onChange}
					/>
					<BtnNext onClick={handleSubmit}>add skill</BtnNext>
				</Flex>
				<ContainerSkilll>
					<SearchSkills showSearchList = {showSearchList} onClick={addSkillsSearchingHandler} value={input.values} />
				</ContainerSkilll>
			</FormControl>
			<BtnGroup>
				<Link to='/education'>
					<BtnBack type='button'>Back</BtnBack>
				</Link>
				<Link to='/summary'>
					<BtnNext type='button'>Next</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

const Skill = styled.div`
	padding: 0.3rem 1.2rem;
	background: #2b5468;
	color: #ffffff;
	border-radius: 50px;
	display: flex;
	align-items: center;
	.icon {
		opacity: 0;
		cursor: pointer;
	}
	&:hover .icon {
		opacity: 1;
	}
`
const ContainerSkilll = styled.div`
	width: 100%;
	max-height: 200px;
	position: absolute;
	top: 85px;
	overflow-y: scroll;
	background-color: #ffffff;
	padding: 5px;
`


export default Form
