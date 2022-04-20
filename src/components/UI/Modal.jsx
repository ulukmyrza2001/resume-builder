import React, { Fragment } from 'react'
import Centered from './Centered'
import styled from 'styled-components'
import Backdrop from './Backdrop'
import ReactDOM from 'react-dom'

const Modal = ({ children }) => {
	return ReactDOM.createPortal(
		<Fragment>
			<Backdrop background='rgba(0, 0, 0, 0.7)' />
			<Centered>
				<ModalStyled>{children}</ModalStyled>
			</Centered>
		</Fragment>,
		document.getElementById('modal'),
	)
}

const ModalStyled = styled.div`
	padding: 1rem;
	box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.2);
	background-color: whitesmoke;
	animation: MODAL ease-in-out 0.4s;
	@keyframes MODAL {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export default Modal
