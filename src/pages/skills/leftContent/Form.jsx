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
import { useTranslation } from 'react-i18next'

const Skills = ({ skills = [], onClick }) => {
	return skills.map((el) => (
		<Skill key={el.id}>
			{el.skill}&nbsp;
			<IoIosClose onClick={() => onClick(el.id)} className='icon' />
		</Skill>
	))
}

const Form = () => {
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const skills = useSelector((state) => state.resume.resumeData.skills)
	const {values,setValues,onChange,onClear} = useInput()
	const [showSearchList,setShowSearchList] = useState(true)

	const handleSubmit = () => {
		if(!values || values.skills.trim() === '') return
		dispatch(resumeActions.createSkill(values.skills))
		onClear()
		setShowSearchList(true)
	}
	const deleteSkills = (id) => dispatch(resumeActions.deleteSkill(id))
	
	const addSkillsSearchingHandler = (e) =>{
		setValues({...values,skills : e.target.textContent})
		setShowSearchList(false)
	}
	return (
		<FormStyled>
			<Title>{t('skillsTitle')}</Title>
			<SubTxt>{t('skillsSubTitle')}</SubTxt>
			<Flex wrap='wrap' gap='5px'>
				<Skills skills={skills} onClick={deleteSkills} />
			</Flex>
			<FormControl>
				<Label>{t('skill')}</Label>
				<Flex>
					<Input
						value={values.skills}
						placeholder={t('placeHolderSkills')}
						name='skills'
						onChange={onChange}
					/>
					<BtnNext onClick={handleSubmit}>{t('addSkills')}</BtnNext>
				</Flex>
				<ContainerSkilll>
					<SearchSkills showSearchList = {showSearchList} onClick={addSkillsSearchingHandler} value={values.skills} />
				</ContainerSkilll>
			</FormControl>
			<BtnGroup>
				<Link to='/education'>
					<BtnBack type='button'>{t('back')}</BtnBack>
				</Link>
				<Link to='/summary'>
					<BtnNext type='button'>{t('next')}</BtnNext>
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
	top: 95px;
	overflow-y: scroll;
	background-color: #ffffff;
	padding: 5px;
`


export default Form
