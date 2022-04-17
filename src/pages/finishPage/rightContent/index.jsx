import React from 'react'
import ChangeColor from '../../../components/changeColor/ChangeColor'
import styled from 'styled-components'
import Flex from '../../../components/UI/Flex'

const RightContent = () => {
	return (
		<BackgroundRightContent>
			<Flex justify = 'center'>
				<ChangeColor />
			</Flex>
		</BackgroundRightContent>
	)
}
export const BackgroundRightContent = styled.div`
	background-image: var(--left-content);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 40%;
`

export default RightContent
