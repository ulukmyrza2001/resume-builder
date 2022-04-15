import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'

const Resume = () => {
	const { resumeData: resume } = useSelector((state) => state.resume)

	return (
		<React.Fragment>
			<GlobalStyle />
			<ContainerResume>
				<Title>{resume.name}</Title>
				<hr />
				<Text>
					{resume.address},{resume.city},{resume.state},{resume.zip}
				</Text>
				<Text>{resume.email}</Text>
				<Text>{resume.phone}</Text>
				<SubTtile>Professional Summary</SubTtile>
				<hr />
				<List>
					{resume.summary.map((el) => (
						<Text key={el}>{el}</Text>
					))}
				</List>
				<SubTtile>Skills</SubTtile>
				<hr />
				<List>
					{resume.skills.map((skill) => (
						<Li key={skill.id}>{skill.skill}</Li>
					))}
				</List>
				<SubTtile>Experience</SubTtile>
				<hr />
				<Div>
					<Address>{resume.jobTitle}</Address>
					<Address>
						{resume.startMonth}&nbsp;{resume.startYears},
						{resume.endMonth}&nbsp;
						{resume.endYear}
					</Address>
				</Div>
				<Address>
					{resume.employer},{resume.experienceCity},
					{resume.experienceState}
				</Address>
				<Text>{resume.education}</Text>
				<SubTtile>Education</SubTtile>
				<hr />
				<Div>
					<Address>
						{resume.educationDegree},{resume.field}
					</Address>
					<Address>
						{resume.educationMonth}&nbsp;{resume.educationYear}
					</Address>
				</Div>
				<Address>
					{resume.schoolName},{resume.educationCity},
					{resume.educationState}
				</Address>
			</ContainerResume>
		</React.Fragment>
	)
}
const ContainerResume = styled.div`
	width: 800px;
	height: 1000px;
	padding: 50px;
	background-color: #ffff;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;

`
const Title = styled.h1`
	font-size: 40px;
`
const SubTtile = styled.h2`
	font-size: 30px;
	margin-bottom: 2px;
`
const Text = styled.p``

const Address = styled.address``

const List = styled.ul``

const Li = styled.li`
	margin-left: 20px;
`
const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const GlobalStyle = createGlobalStyle`
    address,p,li{
		font-size:  15px;
        line-height: 35px;
        color: gray;
    }
`

export default Resume
