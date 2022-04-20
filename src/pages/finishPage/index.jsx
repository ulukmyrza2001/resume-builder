import React, { useEffect } from 'react'
import RightContent from './rightContent'
import { PageStyled } from '../../components/templatePages/styles'
import FinishPage from './leftContent'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { BtnNext, BtnBack } from '../../components/forms/styles'
import { MdFileDownload } from 'react-icons/md'
import Flex from '../../components/UI/Flex'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getDataFromLocalStorage } from '../../utils/helpers/general'

const Finish = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const downloadPDFhandler = () => window.print()

	const newResumeHandler = () => {
		window.location.reload()
		localStorage.removeItem('resume')
	}

	const localDataResume = getDataFromLocalStorage('resume')
	useEffect(() => {
		if (!localDataResume) {
			navigate('/')
		}
	}, [localDataResume, navigate])

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
