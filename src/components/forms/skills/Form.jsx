import React,{ useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Flex from '../../UI/Flex'
import Input from '../../UI/Input'
import {
	FormStyled,
	FormControl,
	SubTxt,
	Title,
	Label,
	BtnGroup,
	BtnBack,
	BtnNext,
} from '../styles'
import { resumeActions } from '../../../store/resumeSlice'
import SearchSkills from './SearchSkills'

const Skills = ({ skills = [], onClick }) => {
	return skills.map((el) => (
		<Skill key={el.id}>
			{el.skill}&nbsp;
			<IoIosClose onClick={() => onClick(el.id)} className='icon' />
		</Skill>
	))
}

const SkillsForm = ({noTitle}) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const skills = useSelector((state) => state.resume.resumeData.skills)
	const [value, setValue] = useState('')
	const [showSearchList, setShowSearchList] = useState(true)

	const handleSubmit = () => {
		if (value.trim() === '') return
		dispatch(resumeActions.createSkill(value))
		setShowSearchList(true)
		setValue('')
	}
	const deleteSkills = (id) => dispatch(resumeActions.deleteSkill(id))

	const addSkillsSearchingHandler = (e) => {
		setValue(e.target.textContent)
		setShowSearchList(false)
	}
	return (
		<FormStyled>
			{!noTitle && (
				<React.Fragment>
					<Title>{t('skillsTitle')}</Title>
					<SubTxt>{t('skillsSubTitle')}</SubTxt>
				</React.Fragment>
			)}
			<Flex wrap='wrap' gap='5px'>
				<Skills skills={skills} onClick={deleteSkills} />
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

export default SkillsForm
