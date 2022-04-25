import styled from 'styled-components'
// form styled//

export const FormStyled = styled.div`
   width: 450px;
   animation: form 0.6s ease-in-out;
   @keyframes form {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
export const Title = styled.h1`
   color: var(--color-title);
   line-height: 40px;
   margin-bottom: 15px;
`
export const SubTxt = styled.div`
   color: var(--color-sub-title);
   margin-bottom: 20px;
`
export const FormControl = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
`
export const Div = styled.div`
   display: flex;
   align-items: center;
`
export const Label = styled.label`
   font-size: 14px;
   font-weight: 500;
   margin: 9px 0 4px 0;
   color: var(--color-title);
`

export const BtnGroup = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin: 40px 0 0 0;
`
export const BtnBack = styled.button`
   min-width: 180px;
   border: var(--border-btn);
   padding: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 0.5px;
   background-color: #fafafa;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   color: var(--color-title);
   outline: none;
   cursor: pointer;
   &:hover {
      border-color: #c5c5c5;
      background-color: #f5f2f2;
   }
`
export const BtnNext = styled(BtnBack)`
   background-color: var(--background-btn-next);
   color: whitesmoke;
   &:hover {
      border-color: #c5c5c5;
      background-color: #0e2a47;
   }
`
