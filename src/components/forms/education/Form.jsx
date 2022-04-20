import React, { useEffect } from 'react'
import Input from '../../UI/Input'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {
	Select,
	Option,
	FormStyled,
	FormControl,
	SubTxt,
	Title,
	Label,
	Div,
	BtnGroup,
	BtnBack,
	BtnNext,
} from '../styles'
import Flex from '../../UI/Flex'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Selection = ({ data, width, margin, onChange, name }) => {
	return (
		<Select name={name} onChange={onChange} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const EducationForm = ({ noTitle }) => {
	const {
		schoolName,
		educationCity,
		educationState,
		educationDegree,
		field,
		educationYear,
		educationMonth,
	} = useSelector((state) => state.resume.resumeData.education)

	const { t } = useTranslation()

	const dispatch = useDispatch()

	const { values, onChange } = useInput({
		schoolName: schoolName || '',
		educationCity: educationCity || '',
		educationState: educationState || '',
		educationDegree: educationDegree || '',
		field: field || '',
		educationYear: educationYear || '',
		educationMonth: educationMonth || '',
	})

	useEffect(() => {
		dispatch(resumeActions.createEducationResume(values))
	}, [values, dispatch])

	const years = generateArrayOfYears()
	return (
		<FormStyled>
			{!noTitle && (
				<React.Fragment>
					<Title>{t('educationTitle')}</Title>
					<SubTxt>{t('educationSubText')}</SubTxt>
				</React.Fragment>
			)}
			<FormControl>
				<Label>{t('schoolName')}</Label>
				<Input
					value={values.schoolName}
					onChange={onChange}
					name='schoolName'
					type='text'
				/>
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('eduCity')}</Label>
					<Input
						value={values.educationCity}
						onChange={onChange}
						name='educationCity'
						type='text'
						width='300px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('eduState')}</Label>
					<Input
						value={values.educationState}
						onChange={onChange}
						name='educationState'
						type='text'
					/>
				</FormControl>
			</Div>
			<FormControl>
				<Label>{t('field')}</Label>
				<Input
					value={values.field}
					onChange={onChange}
					name='field'
					type='text'
				/>
			</FormControl>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>{t('graduationDate')}</Label>
					<Div>
						<Selection
							value={values.educationMonth}
							onChange={onChange}
							name='educationMonth'
							data={month}
						/>
						<Selection
							value={values.educationYear}
							onChange={onChange}
							name='educationYear'
							data={years}
						/>
					</Div>
				</Flex>
			</Flex>
			<BtnGroup>
				<Link to='/experience'>
					<BtnBack type='button'>{t('back')}</BtnBack>
				</Link>
				<Link to='/skills'>
					<BtnNext type='button'>{t('next')}</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default EducationForm