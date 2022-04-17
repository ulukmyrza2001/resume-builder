import React from 'react'
import RightContent from './rightContent'
import { PageStyled } from '../styles'
import FinishPage from './leftContent'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { BtnNext, BtnBack } from '../styles'
import { MdFileDownload } from 'react-icons/md'
import Flex from '../../components/UI/Flex'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resumeActions } from '../../store/resumeSlice'
import { print } from 'react-html2pdf'
import styled from 'styled-components'

const Finish = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const downloadPDFhandler = () => print('a', 'resume')

	const newResumeHandler = () => {
		localStorage.removeItem('resume')
		navigate('/contact')
		dispatch(resumeActions.saveResume())
	}
	return (
		<>
			<HeaderFinishPage>
				<BtnBack>
					<MdOutlineKeyboardBackspace />
					{t('back')}
				</BtnBack>
				<Flex>
					<BtnDownload onClick={downloadPDFhandler}>
						<MdFileDownload fontSize={20} />
						{t('download')}
					</BtnDownload>
					<BtnNext onClick={newResumeHandler}>
						{t('newResume')}
					</BtnNext>
				</Flex>
			</HeaderFinishPage>
			<PageStyled>
				<FinishPage />
				<RightContent />
			</PageStyled>
		</>
	)
}
const HeaderFinishPage = styled.div`
	padding: 1rem 2rem;
	background-color: white;
	display: flex;
	justify-content: space-between;
`
const BtnDownload = styled(BtnNext)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	cursor: pointer;
`

export default Finish
