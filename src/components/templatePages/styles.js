import styled from 'styled-components'

// page styled//

export const PageStyled = styled.div`
   display: flex;
`

// leftContent styled//

export const LeftContainer = styled.div`
   transition: all 0.4s;
   width: 70%;
   padding: 30px 0 0 100px;
   background-color: var(--background);
   height: 100vh;
`

// rightStyled//

export const BackgroundRightContent = styled.div`
   transition: all 0.4s;
   background-image: var(--left-content);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   width: 30%;
   max-height: fit-content;
`
