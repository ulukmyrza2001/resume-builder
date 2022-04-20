import React from 'react'
import Centered from './Centered'
import styled from 'styled-components'

const Modal = ({ children }) => {
	return (
		<Centered>
			<ModalStyled>{children}</ModalStyled>
		</Centered>
	)
}

const ModalStyled = styled.div`
	/* width: 1000px; */
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
