import React from 'react'
import Chart from './Chart'
import Header from './header/Header'

const MainHeader = ({ children }) => {
   return (
      <>
         <Header>MainHeader</Header>
         <Chart />
         <main>{children}</main>
      </>
   )
}

export default MainHeader
