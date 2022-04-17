import React from 'react'
import Resume from '../Resume'
import styled from 'styled-components'
import { Preview } from 'react-html2pdf'

const FinishPage = () => {
	return (
		<Finish>
			<Preview id={'resume'}>
				<Resume />
			</Preview>
		</Finish>
	)
}
const Finish = styled.div`
	background-color: #023642;
	width: 60%;
`

export default FinishPage
