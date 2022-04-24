import { useEffect, useState } from 'react'
import {
   getDataFromLocalStorage,
   saveToLocalStorage,
} from '../utils/helpers/general'

export const useTheme = () => {
   const [theme, setTheme] = useState(
      getDataFromLocalStorage('theme') || 'dark'
   )
   useEffect(() => {
      document.documentElement.className = theme
      saveToLocalStorage('theme', theme)
   }, [theme])

   return {
      theme,
      setTheme,
   }
}
