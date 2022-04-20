import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Flex from '../../UI/Flex'
import Input from '../../UI/Input'
import { FormStyled, FormControl, Label, BtnGroup, BtnNext } from '../styles'
import { resumeActions } from '../../../store/resumeSlice'
import SearchSkills from './SearchSkills'
import { hideModal } from '../../../store/modalSlice'

const Skills = ({ skills = [], onClick }) => {
	return skills.map((el) => (
		<Skill key={el.id}>
			{el.skill}&nbsp;
			<IoIosClose onClick={() => onClick(el.id)} className='icon' />
		</Skill>
	))
}

const SkillsEditForm = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const resumes = useSelector((state) => state.resume.resumes)
	const { item } = useSelector((state) => state.resume)
	const [value, setValue] = useState('')
	const [showSearchList, setShowSearchList] = useState(true)

	const resume = item || resumes[resumes.length - 1]

	const handleSubmit = () => {
		if (value.trim() === '') return
		dispatch(resumeActions.editSkill({ value, id: resume.id }))
		setShowSearchList(true)
		setValue('')
	}
	const deleteSkills = (id) => dispatch(resumeActions.deleteEditSkill(id))

	const addSkillsSearchingHandler = (e) => {
		setValue(e.target.textContent)
		setShowSearchList(false)
	}
	return (
		<FormStyled>
			<Flex wrap='wrap' gap='5px'>
				<Skills skills={resume.skills} onClick={deleteSkills} />
			</Flex>
			<FormControl>
				<Label>{t('skill')}</Label>
				<Flex>
					<Input
						value={value}
						placeholder={t('placeHolderSkills')}
						name='skills'
						onChange={(e) => setValue(e.target.value)}
					/>
					<BtnNext onClick={handleSubmit}>{t('addSkills')}</BtnNext>
				</Flex>
				<ContainerSkilll>
					<SearchSkills
						showSearchList={showSearchList}
						onClick={addSkillsSearchingHandler}
						value={value}
					/>
				</ContainerSkilll>
			</FormControl>
			<BtnGroup>
				<BtnNext onClick={() => dispatch(hideModal())} type='button'>
					{t('save')}
				</BtnNext>
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

export default SkillsEditForm
