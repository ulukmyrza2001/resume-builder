import React, { Fragment } from 'react'
import Chart from './Chart'
import Header from './header/Header'

const MainHeader = ({ children }) => {
	return (
		<Fragment>
			<Header>MainHeader</Header>
			<Chart />
			<main>{children}</main>
		</Fragment>
	)
}

export default MainHeader
