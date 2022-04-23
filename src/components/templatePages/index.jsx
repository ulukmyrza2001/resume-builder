import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
import { PageStyled } from './styles'

const TemplatePage = ({ children }) => {
   return (
      <PageStyled>
         <LeftContent>{children}</LeftContent>
         <RightContent />
      </PageStyled>
   )
}

export default TemplatePage
