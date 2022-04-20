import React, { useEffect, useRef } from 'react'
import RightContent from './rightContent'
import { PageStyled } from '../../components/templatePages/styles'
import FinishPage from './leftContent'
import { BtnNext } from '../../components/forms/styles'
import { MdFileDownload } from 'react-icons/md'
import Flex from '../../components/UI/Flex'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getDataFromLocalStorage } from '../../utils/helpers/general'
import ReactToPrint from 'react-to-print'

const Finish = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const componentRef = useRef()

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
				<Flex justify='space-between'>
					<ReactToPrint
						trigger={() => (
							<BtnDownload>
								<MdFileDownload fontSize={20} />
								{t('download')}
							</BtnDownload>
						)}
						content={() => componentRef.current}
					/>

					<BtnNext onClick={newResumeHandler}>
						{t('newResume')}
					</BtnNext>
				</Flex>
			</HeaderFinishPage>
			<PageStyled>
				<FinishPage ref={componentRef} />
				<RightContent />
			</PageStyled>
		</>
	)
}
const HeaderFinishPage = styled.div`
	padding: 1rem 2rem;
	background-color: white;
`
const BtnDownload = styled(BtnNext)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	cursor: pointer;
`

export default Finish
