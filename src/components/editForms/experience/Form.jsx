import React from 'react'
import Input from '../../UI/Input'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import useInput from '../../../hooks/useInput'
import {
	FormStyled,
	FormControl,
	Label,
	Div,
	BtnGroup,
	BtnNext,
	Select,
	Option,
} from '../styles'
import Flex from '../../UI/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { resumeActions } from '../../../store/resumeSlice'
import { useTranslation } from 'react-i18next'
import { hideModal } from '../../../store/modalSlice'

const Selection = ({ data, width, margin, name, onChange }) => {
	return (
		<Select onChange={onChange} name={name} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const ExperienceEditForm = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const resumes = useSelector((state) => state.resume.resumes)
	const { item } = useSelector((state) => state.resume)
	const resume = item || resumes[resumes.length - 1]

	const {
		jobTitle,
		employer,
		experienceCity,
		experienceState,
		startYears,
		startMonth,
		endYear,
		endMonth,
	} = resume.experience

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

	const editHandler = (id) => {
		dispatch(resumeActions.editExperience({ values, id }))
		dispatch(hideModal())
	}
	const years = generateArrayOfYears()
	return (
		<FormStyled>
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
				<BtnNext onClick={() => editHandler(resume.id)} type='button'>
					{t('save')}
				</BtnNext>
				<BtnNext onClick={() => dispatch(hideModal())} type='button'>
					{t('cancel')}
				</BtnNext>
			</BtnGroup>
		</FormStyled>
	)
}

export default ExperienceEditForm
