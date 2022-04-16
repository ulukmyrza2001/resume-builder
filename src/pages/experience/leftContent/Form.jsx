import React from 'react'
import Input from '../../../components/UI/Input'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import useInput from '../../../hooks/useInput'
import {
	FormStyled,
	FormControl,
	SubTxt,
	Title,
	Label,
	Div,
	Checkbox,
	BtnGroup,
	BtnBack,
	BtnNext,
	Select,
	Option
} from '../../styles'
import Flex from '../../../components/UI/Flex'
import { useDispatch } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import { useTranslation } from 'react-i18next'

const Selection = ({ data, width, margin,name,onChange }) => {
	return (
		<Select onChange={onChange} name={name} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
	const {t} = useTranslation()
	const years = generateArrayOfYears()
	const dispatch = useDispatch()

	const saveResumeDataToStore = (dataResume) => dispatch(resumeActions.createResume(dataResume))
 
	const input = useInput(saveResumeDataToStore)
	return (
		<FormStyled>
			<Title>{t('experienceTitle')}</Title>
			<SubTxt>{t('experienceSubText')}</SubTxt>
			<FormControl>
				<Label>{t('jobTitle')}</Label>
				<Input onChange={input.onChange} name='jobTitle' type='text' />
			</FormControl>
			<FormControl>
				<Label>{t('employer')}</Label>
				<Input onChange={input.onChange} name='employer' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('expCity')}</Label>
					<Input onChange={input.onChange} name='experienceCity' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>{t('expState')}</Label>
					<Input onChange={input.onChange} name='experienceState' type='text' />
				</FormControl>
			</Div>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>{t('startDate')}</Label>
					<Div>
						<Selection onChange={input.onChange} name = 'startMonth' data={month} />
						<Selection onChange={input.onChange} name = 'startYears' data={years} />
					</Div>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Label>{t('endDate')}</Label>
					<Div>
						<Selection onChange={input.onChange} name = 'endMonth' data={month} />
						<Selection onChange={input.onChange} name = 'endYear' data={years} />
					</Div>
				</Flex>
				<Flex align='center' justify='center'>
					<Checkbox type='checkbox' />
					<Label>I currently work here</Label>
				</Flex>
			</Flex>
			<BtnGroup>
				<Link to = '/contact'><BtnBack type='button'>{t('back')}</BtnBack></Link>
				<Link to ='/education'><BtnNext type = 'button'>{t('next')}</BtnNext></Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default Form
