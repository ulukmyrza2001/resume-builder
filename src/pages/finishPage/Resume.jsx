import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Grid from '../../components/UI/Grid'
import Flex from '../../components/UI/Flex'

const Resume = () => {
	const { t } = useTranslation()
	const { resumeData: resume,color } = useSelector((state) => state.resume)

	return (
		<React.Fragment>
			<GlobalStyle color = {color} />
			<ContainerResume>
				<Title>{resume.name || t('contactInformation')}</Title>
				<HR />
				<Text>
					<Grid columns='1fr 1fr'>
						<div>
							<b>{t('address')} : </b> {resume.address}
						</div>
						<div>
							<b>{t('city')} : </b> {resume.city}
						</div>
					</Grid>
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('state')} : </b> {resume.state}
					</Text>
					<Text>
						<b>{t('zipcode')} : </b> {resume.zip}
					</Text>
				</Grid>
				<Text>
					<b>{t('email')} : </b> {resume.email}
				</Text>
				<Text>
					<b>{t('phone')} : </b> {resume.phone}
				</Text>
				<SubTtile>{t('summaryTtile')}</SubTtile>
				<HR />
				<List>
					{resume.summary &&
						resume.summary.map((el) => <Text key={el}>{el}</Text>)}
				</List>
				<SubTtile>{t('skills')}</SubTtile>
				<HR />
				<List>
					<Grid columns='2fr 2fr'>
						{resume.skills &&
							resume.skills.map((skill) => (
								<Li key={skill.id}>{skill.skill}</Li>
							))}
					</Grid>
				</List>
				<SubTtile>{t('experience')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('jobTitle')} : </b> {resume.jobTitle}
					</Text>
					<Cursiv>
						{resume.startMonth}&nbsp;{resume.startYears},
						{resume.endMonth}&nbsp;
						{resume.endYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('employer')} : </b> {resume.employer}
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('city')} : </b> {resume.experienceCity}
					</Text>
					<Text>
						<b>{t('state')} : </b> {resume.experienceState}
					</Text>
				</Grid>
				<Text>{resume.education}</Text>
				<SubTtile>{t('education')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('field')} : </b> {resume.field}
					</Text>
					<Cursiv>
						{resume.educationMonth}&nbsp;{resume.educationYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('schoolName')} : </b> {resume.schoolName}
				</Text>
				<Grid columns='1.5fr 1.5fr'>
					<Text>
						<b>{t('state')} : </b> {resume.educationState}
					</Text>
					<Text>
						<b>{t('city')} : </b> {resume.educationCity}
					</Text>
				</Grid>
			</ContainerResume>
		</React.Fragment>
	)
}
const HR = styled.hr`
	color: #b9b9b9;
	margin-top: 10px;
`
const ContainerResume = styled.div`
	width: 800px;
	height: 1100px;
	padding: 50px;
	background-color: #ffff;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	margin: 2rem auto;
`
const Title = styled.h1`
	font-size: 40px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 10px;
`
const SubTtile = styled.h2`
	font-size: 30px;
	margin: 10px 0 ;
`
const Text = styled.p`
	word-wrap: break-word;
`

const Cursiv = styled.address``

const List = styled.ul``

const Li = styled.li`
	margin-left: 20px;
`

const GlobalStyle = createGlobalStyle`
    h2,h1{
		color : ${props=>props.color || '#464746'};
	}
    address,p,li{
		font-size:  15px;
        line-height: 35px;
        color: gray;
    }
`

export default Resume
