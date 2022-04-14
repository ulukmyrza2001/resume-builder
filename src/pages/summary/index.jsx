import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'
import { PageStyled } from '../styles'

const Summary = () => {
  return (
    <PageStyled>
      <LeftContent/>
      <RightContent/>
    </PageStyled>
  )
}



export default Summary