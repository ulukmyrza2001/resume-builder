import React from 'react'
import Resume from './Resume'
import styled from 'styled-components'
import { BtnNext, BtnBack } from '../styles'
import { MdFileDownload } from 'react-icons/md'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import { Preview, print } from 'react-html2pdf'
import Flex from '../../components/UI/Flex'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resumeActions } from '../../store/resumeSlice'

const FinishPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const downloadPDFhandler = () => print('a', 'resume')

	const newResumeHandler = () =>{
		localStorage.removeItem('resume')
		navigate('/contact')
		dispatch(resumeActions.saveResume())
	}
	
	return (
		<Finish>
			<HeaderFinishPage>
				<BtnBack><MdOutlineKeyboardBackspace/>Preview</BtnBack>
				<Flex>
				<BtnDownload onClick={downloadPDFhandler}>
					<MdFileDownload fontSize={20} />
					Download
				</BtnDownload>
				<BtnNext onClick = {newResumeHandler}>Create New Resume</BtnNext>
				</Flex>
			</HeaderFinishPage>
			<Preview id = {'resume'}>
				<Resume />
			</Preview>
		</Finish>
	)
}
const Finish = styled.div`
	background-color: #023642;
`
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

export default FinishPage
