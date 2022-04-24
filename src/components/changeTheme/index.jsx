import React from 'react'
import { MdNightlight, MdLightMode } from 'react-icons/md'
import styled from 'styled-components'
import { useTheme } from '../../hooks/use-theme'

const ChangeTheme = () => {
   const { theme, setTheme } = useTheme()
   const changeThemeHandler = () => {
      if (theme === 'light') {
         setTheme('dark')
      } else {
         setTheme('light')
      }
   }
   return (
      <ChangeThemeBtn onClick={changeThemeHandler}>
         {theme === 'light' ? (
            <MdNightlight fontSize={20} />
         ) : (
            <MdLightMode fontSize={20} />
         )}
      </ChangeThemeBtn>
   )
}

const ChangeThemeBtn = styled.button`
   width: 100px;
   margin-right: 10px;
   padding: 0.5rem 1rem;
   color: white;
   background-color: transparent;
   border-radius: 4px;
   border: none;
   outline: none;
   transition: 0.4s;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   :hover,
   :active {
      background-color: rgba(72, 101, 180, 0.486);
   }
`
export default ChangeTheme
