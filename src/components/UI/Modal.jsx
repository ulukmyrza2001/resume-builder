import React, { Fragment } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Centered from './Centered'
import Backdrop from './Backdrop'

const Modal = ({ children }) => {
   return ReactDOM.createPortal(
      <>
         <Backdrop background="rgba(0, 0, 0, 0.7)" />
         <Centered>
            <ModalStyled>{children}</ModalStyled>
         </Centered>
      </>,
      document.getElementById('modal')
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
