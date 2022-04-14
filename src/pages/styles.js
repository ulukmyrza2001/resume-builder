import styled from 'styled-components'

//page styled//

export const PageStyled = styled.div`
	display: flex;
`

// leftContent styled//

export const LeftContainer = styled.div`
	width: 70%;
	padding: 30px 0 0 100px;
`

//form styled//

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
    position:relative;
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
export const Checkbox = styled.input`
	width: 15px;
	height: 15px;
	margin: 7px 10px 0 0;
`
export const BtnGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0 50px 0;
`
export const BtnBack = styled.button`
	width: 180px;
	border: 1px solid #cacaca;
	padding: 1rem 0;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.5px;
	background-color: #fafafa;
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

//rightStyled//

export const BackgroundRightContent = styled.div`
background-image:var(--left-content);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 30%;
`

//selectStyled//

export const Select = styled.select`
	width: ${props=>props.width || '150px'};
	padding: 0.7rem;
	outline: none;
	margin: ${props=>props.margin || '10px 0 0 10px'};
	border: 1px solid #cacaca;
	&:focus {
		border-color: #00c293;
	}
`
export const Option = styled.option``

