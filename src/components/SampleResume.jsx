import React, { useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { GrClose } from 'react-icons/gr'
import { AiOutlineExpand } from 'react-icons/ai'
import Backdrop from './UI/Backdrop'

const resume = [
	{
		title: 'Ulukmyrza Zhanybekov',
		address: 'asdfsdf',
		city: 'Bishkek',
		state: 'CA 19900',
		zipCode: 'XDFSDF',
		email: 'uluk@gmail.com',
		phone: '09999999999',
		summary:
			'aasdfajlhasdhfa;sdhf ahha;sdhfjasdhfhsdlkfh hkjhjkhjkahskjdfhkjhsakdjfhashdkfh kjhjashdlfhlasdhflkahsdk khalskdhflasdkfh kjhlk',
		skills: ['java', 'javascript', 'php', 'python', 'c++', 'react'],
		jobTtitle: 'frontend developer',
		employer: 'sdfasdfsdf',
		experienceCity: 'fasdfasdfsdf',
		experienceState: 'SLDFJALSDSLFJSDF lsjdf',
		startYears: '2022',
		startMonth: 'Mar',
		education: 'asdfasdfasdfasdfasdfasdfadfasdfasdf',
		endYear: '2023',
		endMonth: 'Jun',
		schoolName: '№5',
		educationCity: 'Osh',
		educationState: 'sdfadfsdf',
		educationDegree: 'GED',
		fieldOfStudy: 'sdfasdfasdfdfrgslehlakejfhqkehrle',
		educationYear: '2005',
		educationMonth: 'jun',
	},
]

const SampleResume = () => {
	const [showDetail, setShowDetail] = useState(false)

	const showDetailResumeHandler = () => setShowDetail(true)

	const hideDetailResumeHandler = () => setShowDetail(false)

	return resume.map((el) => (
		<React.Fragment key={el}>
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
				<Title detail={showDetail}>{el.title}</Title>
				<hr />
				<Text>
					{el.address},{el.city},{el.state},{el.zipCode}
				</Text>
				<Text>{el.email}</Text>
				<Text>{el.phone}</Text>
				<SubTtile detail={showDetail}>Professional Summary</SubTtile>
				<hr />
				<Text>{el.summary}</Text>
				<SubTtile detail={showDetail}>Skills</SubTtile>
				<hr />
				<List>
					{el.skills.map((el) => (
						<Li key={el}>{el}</Li>
					))}
				</List>
				<SubTtile detail={showDetail}>Experience</SubTtile>
				<hr />
				<Div>
					<Address>{el.jobTtitle}</Address>
					<Address>
						{el.startMonth}&nbsp;{el.startYears},{el.endMonth}&nbsp;
						{el.endYear}
					</Address>
				</Div>
				<Address>
					{el.employer},{el.experienceCity},{el.experienceState}
				</Address>
				<Text>{el.education}</Text>
				<SubTtile detail={showDetail}>Education</SubTtile>
				<hr />
				<Div>
					<Address>
						{el.educationDegree},{el.fieldOfStudy}
					</Address>
					<Address>
						{el.educationMonth}&nbsp;{el.educationYear}
					</Address>
				</Div>
				<Address>
					{el.schoolName},{el.educationCity},{el.educationState}
				</Address>
			</ContainerResume>
		</React.Fragment>
	))
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
	height: ${(props) => (props.detail ? '1000px' : '500px')};
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
