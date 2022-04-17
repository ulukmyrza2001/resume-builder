import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { GrClose } from 'react-icons/gr'
import { AiOutlineExpand } from 'react-icons/ai'
import Backdrop from './UI/Backdrop'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { saveToLocalStorage } from '../utils/helpers/general'

const SampleResume = () => {
	const { t } = useTranslation()
	const { resumeData: resume } = useSelector((state) => state.resume)
	const [showDetail, setShowDetail] = useState(false)

	const showDetailResumeHandler = () => setShowDetail(true)

	const hideDetailResumeHandler = () => setShowDetail(false)

	useEffect(() => {
		saveToLocalStorage('resume', resume)
	}, [resume])

	return (
		<React.Fragment>
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
					<AiOutlineExpand color='white' fontSize={'20px'} />
				</DetailResume>
				<Title detail={showDetail}>
					{resume.name || t('contactInformation')}
				</Title>
				<hr />
				<Text>
					{resume.address},{resume.city},{resume.state},{resume.zip}
				</Text>
				<Text>{resume.email}</Text>
				<Text>{resume.phone}</Text>
				<SubTtile detail={showDetail}>{t('summaryTtile')}</SubTtile>
				<hr />
				<List>
					{resume.summary &&
						resume.summary.map((el) => <Text key={el}>{el}</Text>)}
				</List>
				<SubTtile detail={showDetail}>{t('skills')}</SubTtile>
				<hr />
				<List>
					{resume.skills &&
						resume.skills.map((skill) => (
							<Li key={skill.id}>{skill.skill}</Li>
						))}
				</List>
				<SubTtile detail={showDetail}>{t('experience')}</SubTtile>
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
				<SubTtile detail={showDetail}>{t('education')}</SubTtile>
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
	width: ${(props) => (props.detail ? '800px' : '330px')};
	height: ${(props) => (props.detail ? '1000px' : '470px')};
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
`
const SubTtile = styled.h2`
	font-size: ${(props) => (props.detail ? '30px' : '11px')};
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
