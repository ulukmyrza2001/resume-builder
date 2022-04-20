import React, { useEffect } from 'react'
import styled from 'styled-components'
import { RiWechatLine } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'
import Language from '../../languageComponents/Language'
import Flex from '../../UI/Flex'
import { getDataFromLocalStorage } from '../../../utils/helpers/general'

const Header = () => {
   const { t,i18n } = useTranslation()
   useEffect(()=>{
		i18n.changeLanguage(getDataFromLocalStorage('lang'))
	},[i18n])
   return (
      <HeaderStyled>
         <ImgLogo src="https://cdnprod4.resumehelp.com/img/rh-logo.svg?v=1860" />
         <Flex align="center">
            <Flex align="center">
               <Span className="first">
                  <RiWechatLine className="icon" fontSize="20px" />
                  {t('liveChat')} &nbsp;
               </Span>
               <Span>{t('myAccount')}</Span>
               <Language />
            </Flex>
         </Flex>
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
   .first {
      border-right: 2px solid #ffffff;
      margin-right: 8px;
      text-align: center;
   }
`
const ImgLogo = styled.img`
   width: 160px;
   height: 40px;
`
const Span = styled.span`
   color: #ffffff;
   text-transform: uppercase;
   font-family: Source Sans Pro, Arial, sans-serif;
   font-size: 15px;
   font-weight: 700;
   display: flex;
   align-items: center;
   .icon {
      transform: translateX(-2px);
   }
`

export default Header
