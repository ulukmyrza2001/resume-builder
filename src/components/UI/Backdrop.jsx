import React from 'react'
import styled from 'styled-components'

const Backdrop = () => {
   return <BackdropStyled />
}

const BackdropStyled = styled.div`
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   background-color: #1f4e58ea;
   z-index: 10;
`
export default Backdrop
