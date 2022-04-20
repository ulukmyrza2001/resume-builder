import React, { useEffect } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import {
	FormStyled,
	SubTxt,
	Title,
	BtnGroup,
	BtnNext,
	BtnBack,
} from '../styles'
import Flex from '../../UI/Flex'
import { Link } from 'react-router-dom'
import useInput from '../../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import { useTranslation } from 'react-i18next'

const SummaryForm = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { summaryValue } = useSelector((state) => state.resume.resumeData)

	const input = useInput({ summary: summaryValue || '' })

	const saveResumeHandler = () => dispatch(resumeActions.saveResume())

	useEffect(() => {
		if (input.values) {
			dispatch(resumeActions.createSummaryResume(input.values))
		}
	}, [input.values, dispatch])
	return (
		<FormStyled>
			<React.Fragment>
				<Title>{t('summaryTtile')}</Title>
				<SubTxt>{t('summarySubText')}</SubTxt>
			</React.Fragment>
			<AddSummary>
				<Flex align='center' justify='end'>
					<AiOutlinePlusCircle />
					Add Pre-written Examples
				</Flex>
			</AddSummary>
			<Textarea
				value={input.values.summary}
				placeholder={t('summaryPlaceholder')}
				onChange={input.onChange}
				cols='60'
				rows='15'
				name='summary'
			></Textarea>
			<BtnGroup>
				<Link to='/skills'>
					<BtnBack type='button'>{t('back')}</BtnBack>
				</Link>
				<Link to='/finish'>
					<BtnNext onClick={saveResumeHandler} type='button'>
						{t('next')}
					</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

const Textarea = styled.textarea`
	width: 100%;
	padding: 0.7rem 1rem;
	outline: none;
	resize: none;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	border: 1px solid #cacaca;
	line-height: 20px;
	&:focus {
		border-color: #00c293;
	}
`
const AddSummary = styled.h4`
	color: #00c293;
	cursor: pointer;
	margin-bottom: 3px;
`

export default SummaryForm
