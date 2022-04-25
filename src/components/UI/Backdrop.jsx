import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

const Backdrop = ({ background }) => {
   return ReactDOM.createPortal(
      <BackdropStyled background={background} />,
      document.getElementById('modal')
   )
}

const BackdropStyled = styled.div`
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 0;
`
export default Backdrop
