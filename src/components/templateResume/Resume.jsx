import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Grid from '../UI/Grid'
import { AiOutlineExpand } from 'react-icons/ai'

const Resume = ({ resume, showDetail, showDetailResumeHandler }) => {
	const { t } = useTranslation()
	return (
		<React.Fragment>
			<GlobalStyle detail={showDetail} />
			<ContainerResume detail={showDetail}>
				<DetailResume
					detail={showDetail}
					onClick={showDetailResumeHandler}
				>
					<AiOutlineExpand color='white' fontSize={'20px'} />
				</DetailResume>
				<Title detail={showDetail}>
					{resume.name || t('contactInformation')}
				</Title>
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
				<SubTtile detail={showDetail}>{t('summaryTtile')}</SubTtile>
				<HR />
				<List>
					{resume.summary &&
						resume.summary.map((el) => <Text key={el}>{el}</Text>)}
				</List>
				<SubTtile detail={showDetail}>{t('skills')}</SubTtile>
				<HR />
				<List>
					<Grid columns='2fr 2fr'>
						{resume.skills &&
							resume.skills.map((skill) => (
								<Li key={skill.id}>{skill.skill}</Li>
							))}
					</Grid>
				</List>
				<SubTtile detail={showDetail}>{t('experience')}</SubTtile>
				<HR />
				<Div>
					<Text>
						<b>{t('jobTitle')} : </b> {resume.jobTitle}
					</Text>
					<Cursiv>
						{resume.startMonth}&nbsp;{resume.startYears},
						{resume.endMonth}&nbsp;
						{resume.endYear}
					</Cursiv>
				</Div>
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
				<SubTtile detail={showDetail}>{t('education')}</SubTtile>
				<HR />
				<Div>
					<Text>
						<b>{t('field')} : </b> {resume.field}
					</Text>
					<Cursiv>
						{resume.educationMonth}&nbsp;{resume.educationYear}
					</Cursiv>
				</Div>
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
export const DetailResume = styled.div`
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
const GlobalStyle = createGlobalStyle`
    address,p,li{
		font-size:  ${(props) => (props.detail ? '15px' : '7px')};
        line-height: ${(props) => (props.detail ? '35px' : '16px')};
        color: gray;
    }
	
`
const HR = styled.hr`
	color: #b9b9b9;
`
const ContainerResume = styled.div`
	border: 5px solid gray;
	width: ${(props) => (props.detail ? '800px' : '350px')};
	height: ${(props) => (props.detail ? '900px' : '470px')};
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
`
const SubTtile = styled.h2`
	font-size: ${(props) => (props.detail ? '30px' : '11px')};
	margin-bottom: 2px;
`
const Text = styled.p`
	word-wrap: break-word;
`
const Cursiv = styled.address``

const List = styled.ul``

const Li = styled.li`
	margin-left: 20px;
`
const Div = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export default Resume
