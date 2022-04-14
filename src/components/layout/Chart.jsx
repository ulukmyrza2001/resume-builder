import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Chart = () => {
	const [chart, setChart] = useState(100)
	const { pathname } = useLocation()
	useLayoutEffect(() => {
		if (pathname === '/contact') {
			setChart(17)
		} else if (pathname === '/experience') {
			setChart(34)
		} else if (pathname === '/education') {
			setChart(50)
		} else if (pathname === '/skills') {
			setChart(66)
		} else if (pathname === '/summary') {
			setChart(83)
		} else if (pathname === '/finish') {
			setChart(100)
		}
	}, [pathname])
	return (
		<ChartStyled>
			<Div chart={chart}>
				<DivItem chart={chart} />
				<Step className='step1'>
					<Title>STARTED</Title>
				</Step>
				<Step className='step2'>
					<Title>CONTACT</Title>
				</Step>
				<Step className='step3'>
					<Title>EXPERIENCE</Title>
				</Step>
				<Step className='step4'>
					<Title>EDUCATION</Title>
				</Step>
				<Step className='step5'>
					<Title>SKILLS</Title>
				</Step>
				<Step className='step6'>
					<Title>SUMMARY</Title>
				</Step>
				<Step className='step7'>
					<Title>FINISH</Title>
				</Step>
			</Div>
		</ChartStyled>
	)
}

const ChartStyled = styled.div`
	height: 4rem;
	padding: 2.6rem 1.6rem 0 1.6rem;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #d9d9d9;
`
const Div = styled.div`
	width: 92%;
	height: 3px;
	border-radius: 20px;
	background-color: #d9d9d9;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	.step1 {
		background-color: ${(props) =>
			props.chart > 0 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step2 {
		background-color: ${(props) =>
			props.chart >= 17 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step3 {
		background-color: ${(props) =>
			props.chart >= 34 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step4 {
		background-color: ${(props) =>
			props.chart >= 50 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step5 {
		background-color: ${(props) =>
			props.chart >= 66 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step6 {
		background-color: ${(props) =>
			props.chart >= 83 && props.chart < 100 ? '#00c293' : '#d9d9d9'};
	}
	.step7 {
		background-color: ${(props) =>
			props.chart === 100 ? '#00c293' : '#d9d9d9'};
	}
`
const DivItem = styled.div`
	width: ${({ chart }) => chart + '%'};
	height: 100%;
	background-color: #00c293;
	position: absolute;
`
const Step = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: #d9d9d9;
	display: flex;
	justify-content: center;
	position: relative;
`
const Title = styled.h3`
	position: absolute;
	bottom: 25px;
	color: #333340;
	font-family: 'Source Sans Pro', Arial, sans-serif;
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 0.5px;
`

export default Chart
