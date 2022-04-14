import React from 'react'
import Chart from './Chart'
import Header from './Header'

const MainHeader = ({children}) => {
	return (
		<>
			<Header>MainHeader</Header>
      <Chart/>
			<main>{children}</main>
		</>
	)
}

export default MainHeader
