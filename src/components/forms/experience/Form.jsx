import React, { useEffect } from 'react'
import Input from '../../UI/Input'
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
	BtnGroup,
	BtnBack,
	BtnNext,
	Select,
	Option,
} from '../styles'
import Flex from '../../UI/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import { useTranslation } from 'react-i18next'

const Selection = ({ data, width, margin, name, onChange }) => {
	return (
		<Select onChange={onChange} name={name} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const ExperienceForm = ({ noTitle }) => {
	const {
		jobTitle,
		employer,
		experienceCity,
		experienceState,
		startYears,
		startMonth,
		endYear,
		endMonth,
	} = useSelector((state) => state.resume.resumeData.experience)

	const dispatch = useDispatch()
	const { t } = useTranslation()
	const { values, onChange } = useInput({
		jobTitle: jobTitle || '',
		employer: employer || '',
		experienceCity: experienceCity || '',
		experienceState: experienceState || '',
		startYears: startYears || '',
		startMonth: startMonth || '',
		endYear: endYear || '',
		endMonth: endMonth || '',
	})

	useEffect(() => {
		dispatch(resumeActions.createExperienceResume(values))
	}, [values, dispatch])
	const years = generateArrayOfYears()
	return (
		<FormStyled>
			{!noTitle && (
				<React.Fragment>
					<Title>{t('experienceTitle')}</Title>
					<SubTxt>{t('experienceSubText')}</SubTxt>
				</React.Fragment>
			)}
			<FormControl>
				<Label>{t('jobTitle')}</Label>
				<Input
					value={values.jobTitle}
					onChange={onChange}
					name='jobTitle'
					type='text'
				/>
			</FormControl>
			<FormControl>
				<Label>{t('employer')}</Label>
				<Input
					value={values.employer}
					onChange={onChange}
					name='employer'
					type='text'
				/>
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('expCity')}</Label>
					<Input
						value={values.experienceCity}
						onChange={onChange}
						name='experienceCity'
						type='text'
						width='300px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('expState')}</Label>
					<Input
						value={values.experienceState}
						onChange={onChange}
						name='experienceState'
						type='text'
					/>
				</FormControl>
			</Div>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>{t('startDate')}</Label>
					<Div>
						<Selection
							value={values.startMonth}
							onChange={onChange}
							name='startMonth'
							data={month}
						/>
						<Selection
							value={values.startYears}
							onChange={onChange}
							name='startYears'
							data={years}
						/>
					</Div>
				</Flex>
				<Flex align='center' justify='space-between'>
					<Label>{t('endDate')}</Label>
					<Div>
						<Selection
							value={values.endMonth}
							onChange={onChange}
							name='endMonth'
							data={month}
						/>
						<Selection
							value={values.endYear}
							onChange={onChange}
							name='endYear'
							data={years}
						/>
					</Div>
				</Flex>
			</Flex>
			<BtnGroup>
				<Link to='/contact'>
					<BtnBack type='button'>{t('back')}</BtnBack>
				</Link>
				<Link to='/education'>
					<BtnNext type='button'>{t('next')}</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default ExperienceForm
