import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import engIcon from '../../assets/icons/united-kingdom.png'
import ruIcon from '../../assets/icons/flags.png'
import kgIcon from '../../assets/icons/kyrgyzstan.png'
import LanguageItem from './LanguageItem'
import { saveToLocalStorage } from '../../utils/helpers/general'

const languages = [
   {
      code: 'en',
      icon: engIcon,
      name: 'English',
   },
   {
      code: 'ru',
      icon: ruIcon,
      name: 'Русский',
   },
   {
      code: 'ky',
      icon: kgIcon,
      name: 'Kиргизский',
   },
]

const Language = () => {
   const { i18n } = useTranslation()
   const [lang, setLang] = useState(false)

   const resolvedLng = i18n.resolvedLanguage
   const isIcon = languages.find((language) => language.code === resolvedLng)

   const changeLanguage = (code) => {
      setLang(false)
      i18n.changeLanguage(code)
      saveToLocalStorage('lang', code)
   }
   return (
      <LanguageStyled>
         <IconLanguage onClick={() => setLang(true)} src={isIcon.icon} />
         {lang && (
            <LanguageSelect>
               <LanguageItem
                  languages={languages}
                  changeLanguage={changeLanguage}
                  resolvedLng={resolvedLng}
               />
            </LanguageSelect>
         )}
      </LanguageStyled>
   )
}

const LanguageStyled = styled.div`
   position: relative;
`
const LanguageSelect = styled.div`
   width: 200px;
   padding: 5px;
   background-color: #fff;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   position: absolute;
   border-radius: 3px;
   left: -9.5rem;
   z-index: 100;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 4px;
`
const IconLanguage = styled.img`
   width: 25px;
   height: 25px;
   margin-left: 20px;
   cursor: pointer;
`

export default Language
