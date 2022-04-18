import React, { useEffect } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Grid from '../../components/UI/Grid'
import Flex from '../../components/UI/Flex'
import { saveToLocalStorage } from '../../utils/helpers/general'

const Resume = ({item}) => {
	const { t } = useTranslation()
	const { resumes: resume,color } = useSelector((state) => state.resume)
    const lastItem = item || resume.length - 1
	useEffect(()=>{
		saveToLocalStorage('@resumes',resume)
	},[resume])
	return (
		<React.Fragment>
			<GlobalStyle color = {color} />
			<ContainerResume>
				<Title>{resume[lastItem].name || t('contactInformation')}</Title>
				<HR />
				<Text>
					<Grid columns='1fr 1fr'>
						<div>
							<b>{t('address')} : </b> {resume[lastItem].address}
						</div>
						<div>
							<b>{t('city')} : </b> {resume[lastItem].city}
						</div>
					</Grid>
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('state')} : </b> {resume[lastItem].state}
					</Text>
					<Text>
						<b>{t('zipcode')} : </b> {resume[lastItem].zip}
					</Text>
				</Grid>
				<Text>
					<b>{t('email')} : </b> {resume[lastItem].email}
				</Text>
				<Text>
					<b>{t('phone')} : </b> {resume[lastItem].phone}
				</Text>
				<SubTtile>{t('summaryTtile')}</SubTtile>
				<HR />
				<List>
					{resume[lastItem].summary &&
						resume[lastItem].summary.map((el) => <Text key={el}>{el}</Text>)}
				</List>
				<SubTtile>{t('skills')}</SubTtile>
				<HR />
				<List>
					<Grid columns='2fr 2fr'>
						{resume[lastItem].skills &&
							resume[lastItem].skills.map((skill) => (
								<Li key={skill.id}>{skill.skill}</Li>
							))}
					</Grid>
				</List>
				<SubTtile>{t('experience')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('jobTitle')} : </b> {resume[lastItem].jobTitle}
					</Text>
					<Cursiv>
						{resume[lastItem].startMonth}&nbsp;{resume[lastItem].startYears},
						{resume[lastItem].endMonth}&nbsp;
						{resume[lastItem].endYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('employer')} : </b> {resume[lastItem].employer}
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('city')} : </b> {resume[lastItem].experienceCity}
					</Text>
					<Text>
						<b>{t('state')} : </b> {resume[lastItem].experienceState}
					</Text>
				</Grid>
				<Text>{resume[lastItem].education}</Text>
				<SubTtile>{t('education')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('field')} : </b> {resume[lastItem].field}
					</Text>
					<Cursiv>
						{resume[lastItem].educationMonth}&nbsp;{resume[lastItem].educationYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('schoolName')} : </b> {resume[lastItem].schoolName}
				</Text>
				<Grid columns='1.5fr 1.5fr'>
					<Text>
						<b>{t('state')} : </b> {resume[lastItem].educationState}
					</Text>
					<Text>
						<b>{t('city')} : </b> {resume[lastItem].educationCity}
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
