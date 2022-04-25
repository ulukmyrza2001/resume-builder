import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaListAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Language from '../../languageComponents/Language'
import Flex from '../../UI/Flex'
import { getDataFromLocalStorage } from '../../../utils/helpers/general'
import Modal from '../../UI/Modal'
import notFound from '../../../assets/icons/notFound.png'
import ChangeTheme from '../../changeTheme/index'

const Header = () => {
   const { t, i18n } = useTranslation()
   const { pathname } = useLocation()
   const { resumes } = useSelector((state) => state.resumes)
   const navigate = useNavigate()
   const [showModal, setShowModal] = useState(false)
   useEffect(() => {
      i18n.changeLanguage(getDataFromLocalStorage('lang'))
   }, [i18n])

   const showResumesHandler = () => {
      if (resumes.length === 0) {
         setShowModal(true)
         return
      }
      navigate('/finish')
   }
   return (
      <HeaderStyled>
         {showModal && (
            <Modal>
               <MessageModal>
                  <H2>Not Found Resume</H2>
                  <Img src={notFound} />
                  <BtnOk onClick={() => setShowModal(false)}>OK</BtnOk>
               </MessageModal>
            </Modal>
         )}
         <ImgLogo src="https://cdnprod4.resumehelp.com/img/rh-logo.svg?v=1860" />
         <Flex align="center">
            <Flex align="center">
               <ChangeTheme />
               {pathname !== '/finish' && (
                  <Span onClick={showResumesHandler} className="first">
                     <FaListAlt className="icon" fontSize="20px" />
                     {t('myResumes')} &nbsp;
                  </Span>
               )}
               <Span>{t('myAccount')}</Span>
               <Language />
            </Flex>
         </Flex>
      </HeaderStyled>
   )
}

const MessageModal = styled.div`
   position: relative;
   width: 400px;
   height: 100px;
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1rem;
`
const Img = styled.img``
const BtnOk = styled.button`
   width: 60px;
   position: absolute;
   bottom: 0;
   right: 0;
   padding: 0.3rem;
   border: none;
   background-color: #023642;
   border-radius: 4px;
   box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
   color: white;
   font-weight: bold;
   transition: 0.3s;
   cursor: pointer;
   :hover {
      background-color: white;
      color: #023642;
   }
`
const H2 = styled.h2`
   color: var(--color-sub-title);
   font-weight: bold;
   font-size: 20px;
   text-transform: uppercase;
`

const HeaderStyled = styled.header`
   height: 4rem;
   padding: 0.3rem 1.6rem;
   background-color: var(--background-header);
   display: flex;
   align-items: center;
   justify-content: space-between;
   .first {
      border-right: 2px solid #ffffff;
      border-left: 2px solid #ffffff;
      margin-right: 8px;
      text-align: center;
   }
`
const ImgLogo = styled.img`
   width: 160px;
   height: 40px;
`
const Span = styled.span`
   padding: 0.5rem 1rem;
   border-radius: 4px;
   color: #ffffff;
   text-transform: uppercase;
   font-family: Source Sans Pro, Arial, sans-serif;
   font-size: 15px;
   font-weight: 700;
   display: flex;
   align-items: center;
   cursor: pointer;
   .icon {
      transform: translateX(-2px);
   }
   :hover {
      background-color: white;
      color: #023642;
   }
`

export default Header
