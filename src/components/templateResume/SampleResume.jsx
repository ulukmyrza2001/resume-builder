import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { GrClose } from 'react-icons/gr'
import { AiOutlineExpand } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Backdrop from '../UI/Backdrop'
import { saveToLocalStorage } from '../../utils/helpers/general'
import Grid from '../UI/Grid'
import Flex from '../UI/Flex'

const SampleResume = () => {
	const { t } = useTranslation()
	const { contact, education, experience, skills, summary } = useSelector(
		(state) => state.resume.resumeData,
	)
	const resume = useSelector((state) => state.resume.resumeData)

	const [showDetail, setShowDetail] = useState(false)

	const showDetailResumeHandler = () => setShowDetail(true)

	const hideDetailResumeHandler = () => setShowDetail(false)

	useEffect(() => {
		window.onbeforeunload = () => {
			return saveToLocalStorage('resume', resume)
		}
	}, [resume])
	useEffect(() => {
		saveToLocalStorage('resume', resume)
	}, [])

	return (
		<>
			{showDetail && <Backdrop />}
			<GlobalStyle detail={showDetail} />
			<ContainerResume detail={showDetail}>
				{showDetail && (
					<CloseDetail onClick={hideDetailResumeHandler}>
						<GrClose />
					</CloseDetail>
				)}
				<DetailResume
					detail={showDetail}
					onClick={showDetailResumeHandler}
				>
					<AiOutlineExpand color='white' fontSize='20px' />
				</DetailResume>
				<Title detail={showDetail}>
					{contact.name || t('contactInformation')}
				</Title>
				<HR />
				<Text>
					<Grid columns='1fr 1fr'>
						<div>
							<b>{t('address')} : </b> {contact.address}
						</div>
						<div>
							<b>{t('city')} : </b> {contact.city}
						</div>
					</Grid>
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('state')} : </b> {contact.state}
					</Text>
					<Text>
						<b>{t('zipcode')} : </b> {contact.zip}
					</Text>
				</Grid>
				<Text>
					<b>{t('email')} : </b> {contact.email}
				</Text>
				<Text>
					<b>{t('phone')} : </b> {contact.phone}
				</Text>
				<SubTtile detail={showDetail}>{t('summaryTtile')}</SubTtile>
				<HR />
				<List>
					{summary && summary.map((el) => <Text key={el}>{el}</Text>)}
				</List>
				<SubTtile detail={showDetail}>{t('skills')}</SubTtile>
				<HR />
				<List>
					<Grid columns='2fr 2fr'>
						{skills &&
							skills.map((skill) => (
								<Li key={skill.id}>{skill.skill}</Li>
							))}
					</Grid>
				</List>
				<SubTtile detail={showDetail}>{t('experience')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('jobTitle')} : </b> {experience.jobTitle}
					</Text>
					<Cursiv>
						{experience.startMonth}&nbsp;{experience.startYears},
						{experience.endMonth}
						&nbsp;
						{experience.endYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('employer')} : </b> {experience.employer}
				</Text>
				<Grid columns='1fr 1fr'>
					<Text>
						<b>{t('city')} : </b> {experience.experienceCity}
					</Text>
					<Text>
						<b>{t('state')} : </b> {experience.experienceState}
					</Text>
				</Grid>
				<Text>{education.education}</Text>
				<SubTtile detail={showDetail}>{t('education')}</SubTtile>
				<HR />
				<Flex justify='space-between'>
					<Text>
						<b>{t('field')} : </b> {education.field}
					</Text>
					<Cursiv>
						{education.educationMonth}&nbsp;
						{education.educationYear}
					</Cursiv>
				</Flex>
				<Text>
					<b>{t('schoolName')} : </b> {education.schoolName}
				</Text>
				<Grid columns='1.5fr 1.5fr'>
					<Text>
						<b>{t('state')} : </b> {education.educationState}
					</Text>
					<Text>
						<b>{t('city')} : </b> {education.educationCity}
					</Text>
				</Grid>
			</ContainerResume>
		</>
	)
}
const HR = styled.hr`
	color: #b9b9b9;
	margin-top: 10px;
`
const DetailResume = styled.div`
	width: 50px;
	height: 50px;
	background-color: #00c293;
	padding: 15px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: 0.3s;
	opacity: 0;
	cursor: pointer;
`
const ContainerResume = styled.div`
	border: 5px solid gray;
	width: ${(props) => (props.detail ? '800px' : '350px')};
	height: ${(props) => (props.detail ? '900px' : '485px')};
	padding: ${(props) => (props.detail ? '50px' : '20px')};
	position: absolute;
	background-color: #ffff;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
	top: ${(props) => (props.detail ? '90%' : '30%')};
	left: ${(props) => (props.detail ? '50%' : '58%')};
	transform: ${(props) => (props.detail ? 'translate(-50%,-50%)' : '')};
	&:hover ${DetailResume} {
		opacity: ${(props) => (props.detail ? '0' : '1')};
	}
	z-index: 10;
`
const Title = styled.h1`
	font-size: ${(props) => (props.detail ? '40px' : '19px')};
	text-transform: uppercase;
	margin-bottom: 10px;
	text-align: center;
`
const SubTtile = styled.h2`
	font-size: ${(props) => (props.detail ? '30px' : '11px')};
	margin: 10px 0;
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
    address,p,li{
		font-size:  ${(props) => (props.detail ? '15px' : '7px')};
        line-height: ${(props) => (props.detail ? '35px' : '16px')};
        color: gray;
    }
	
`
const CloseDetail = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #ffffff;
	position: fixed;
	top: 0;
	right: -70px;
	padding: 14px;
	cursor: pointer;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
`

export default SampleResume
