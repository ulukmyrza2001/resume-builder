import React from 'react'
import ChangeColor from '../../../components/changeColor/ChangeColor'
import styled from 'styled-components'
import Flex from '../../../components/UI/Flex'
import { useSelector } from 'react-redux'

const RightContent = (props) => {
	const resumes = useSelector((state) => state.resume.resumes)
	const changeResumeHandler = (resume) => {
		const indexResume = resumes.findIndex((el) => el === resume)
		props.getResume(indexResume)
	}
	return (
		<BackgroundRightContent>
			<Flex justify='center'>
				<ChangeColor />
			</Flex>
			<Flex justify='center'>
				<Resumes>
					<H2>Resumes</H2>
					{resumes.map((resume, i) => (
						<ResumeItem
							onClick={() => changeResumeHandler(resume)}
							key={i}
						>
							{resume.name}
						</ResumeItem>
					))}
				</Resumes>
			</Flex>
		</BackgroundRightContent>
	)
}
const H2 = styled.h2`
	margin-bottom: 10px;
`
const BackgroundRightContent = styled.div`
	background-image: var(--left-content);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 40%;
	max-height: 170vh;
`
const Resumes = styled.div`
	border-radius: 3px;
	margin-top: 30px;
	width: 470px;
	padding: 0.5rem;
	max-height: 300px;
	background-color: whitesmoke;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	overflow-y: scroll;
`
const ResumeItem = styled.h2`
	width: 100%;
	padding: 1rem;
	background-color: white;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	margin-bottom: 10px;
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.2s;
	&:hover{
		opacity: 0.7;
	}
`

export default RightContent
