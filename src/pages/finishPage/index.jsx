import React from 'react'
import Resume from './Resume'
import styled from 'styled-components'
import { BtnNext, BtnBack } from '../styles'
import { MdFileDownload } from 'react-icons/md'
import { Preview, print } from 'react-html2pdf'

const FinishPage = () => {
	const downloadPDFhandler = () => {
		print('a', 'resume')
	}
	return (
		<Finish>
			<HeaderFinishPage>
				<BtnBack>Preview</BtnBack>
				<BtnDownload onClick={downloadPDFhandler}>
					<MdFileDownload fontSize={20} />
					Download
				</BtnDownload>
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
