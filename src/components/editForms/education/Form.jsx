import React from 'react'
import Input from '../../UI/Input'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {
	Select,
	Option,
	FormStyled,
	FormControl,
	Label,
	BtnGroup,
	BtnNext,
} from '../styles'
import Flex from '../../UI/Flex'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { hideModal } from '../../../store/modalSlice'

const Selection = ({ data, width, margin, onChange, name }) => {
	return (
		<Select name={name} onChange={onChange} width={width} margin={margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const EducationEditForm = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	const { item } = useSelector((state) => state.resume)
	const resumes = useSelector((state) => state.resume.resumes)
	const resume = item || resumes[resumes.length - 1]
	const {
		schoolName,
		educationCity,
		educationState,
		educationDegree,
		field,
		educationYear,
		educationMonth,
	} = resume.education

	const { values, onChange } = useInput({
		schoolName: schoolName || '',
		educationCity: educationCity || '',
		educationState: educationState || '',
		educationDegree: educationDegree || '',
		field: field || '',
		educationYear: educationYear || '',
		educationMonth: educationMonth || '',
	})

	const editHandler = (id) => {
		dispatch(resumeActions.editEducation({ values, id }))
		dispatch(hideModal())
	}

	const years = generateArrayOfYears()
	return (
		<FormStyled>
			<FormControl>
				<Label>{t('schoolName')}</Label>
				<Input
					value={values.schoolName}
					onChange={onChange}
					name='schoolName'
					type='text'
				/>
			</FormControl>
			<Flex align='center'>
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
			</Flex>
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
					<Flex align='center'>
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
					</Flex>
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

export default EducationEditForm
