import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Flex from '../UI/Flex'
import { resumeActions } from '../../store/resumeSlice'
import { COLORS } from '../../utils/constants/constants'

const ChangeColor = () => {
	const resumeColor = useSelector((state) => state.resume.color)
	const dispatch = useDispatch()
	const changeColorHandler = (color) => {
		dispatch(resumeActions.changeColor(color))
	}
	return (
		<ColorsContainer>
			<H2>Color</H2>
			<Flex wrap='wrap' justify='center' gap='5px'>
				{COLORS.map((color) => (
					<ColorsItem
						isColor={color === resumeColor}
						onClick={() => changeColorHandler(color)}
						key={color}
						color={color}
					/>
				))}
			</Flex>
		</ColorsContainer>
	)
}
const H2 = styled.h2`
	margin-bottom: 10px;
	color: #3c364b;
`
const ColorsContainer = styled.div`
	width: 120px;
	padding: 0.3rem;
	background-color: whitesmoke;
	border-radius: 4px;
   margin-top: 30px;
`
const ColorsItem = styled.button`
	border: none;
	width: 50px;
	height: 50px;
	transition: 0.2s;
	background-color: ${(props) => props.color};
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
	opacity: ${(props) => (props.isColor ? '0.7' : '1')};
	border: ${(props) => (props.isColor ? '5px solid whitesmoke' : 'none')};
	border-radius: 4px;
`
export default ChangeColor
