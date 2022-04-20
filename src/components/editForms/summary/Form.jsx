import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { FormStyled, BtnGroup, BtnNext } from '../styles'
import Flex from '../../UI/Flex'
import { Link } from 'react-router-dom'
import useInput from '../../../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import { useTranslation } from 'react-i18next'
import { hideModal } from '../../../store/modalSlice'

const SummaryEditForm = () => {
	const { summaryValue } = useSelector((state) => state.resume.resumeData)
	const resumes = useSelector((state) => state.resume.resumes)
	const { item } = useSelector((state) => state.resume)
	const resume = item || resumes[resumes.length - 1]

	const { t } = useTranslation()

	const dispatch = useDispatch()

	const input = useInput({
		summary: summaryValue || '',
	})
	const editHandler = () => {
		dispatch(
			resumeActions.editSummary({
				value: input.values.summary,
				id: resume.id,
			}),
		)
		dispatch(hideModal())
	}
	return (
		<FormStyled>
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
				<Link to='/finish'>
					<BtnNext onClick={editHandler} type='button'>
						{t('save')}
					</BtnNext>
				</Link>
				<BtnNext onClick={() => dispatch(hideModal())} type='button'>
					{t('cancel')}
				</BtnNext>
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

export default SummaryEditForm
