import styled from 'styled-components'
// form styled//

export const FormStyled = styled.div`
   width: 450px;
`
export const Title = styled.h1`
   color: #333333;
   line-height: 40px;
   margin-bottom: 15px;
`
export const SubTxt = styled.div`
   color: #405375;
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
`

export const BtnGroup = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin: 30px 0 50px 0;
`
export const BtnBack = styled.button`
   min-width: 180px;
   border: 1px solid #cacaca;
   padding: 1rem;
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 0.5px;
   background-color: #fafafa;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 5px;
   cursor: pointer;
   &:hover {
      border-color: #c5c5c5;
      background-color: #f5f2f2;
   }
`
export const BtnNext = styled(BtnBack)`
   background-color: #00c293;
   color: #ffffff;
   &:hover {
      border-color: #c5c5c5;
      background-color: #03a57d;
   }
`
