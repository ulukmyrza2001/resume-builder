import React from 'react'
import styled from 'styled-components'
import {RiWechatLine} from 'react-icons/ri'

const Header = () => {
	return (
		<HeaderStyled>
			<ImgLogo src='https://cdnprod4.resumehelp.com/img/rh-logo.svg?v=1860' />
			<Div>
				<Span className='first'><RiWechatLine fontSize={'20px'}/> LIVE CHAT &nbsp; </Span>
				<Span> MY ACCOUNT</Span>
			</Div>
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
	height: 4rem;
	padding: 0.3rem 1.6rem;
	background-color: #023642;
	display: flex;
	align-items: center;
	justify-content: space-between;
    .first{
        border-right: 2px solid #ffffff;
        margin-right: 10px;
        text-align: center;
    }
`
const ImgLogo = styled.img`
	width: 160px;
	height: 40px;
`
const Div = styled.div``
const Span = styled.span`
	color: #ffffff;
	text-transform: uppercase;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 15px;
	font-weight: 700;
`

export default Header
