import React from 'react'
import Input from '../../../components/UI/Input'
import { Link } from 'react-router-dom'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import {Select,Option,FormStyled,FormControl,SubTxt,Title,Label,Div,BtnGroup,BtnBack,BtnNext} from '../../styles'
import Flex from '../../../components/UI/Flex'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Selection = ({data,width,margin,onChange,name}) => {
	return (
		<Select name = {name} onChange = {onChange} width = {width} margin = {margin}>
			{data.map((el) => (
				<Option key={el}>{el}</Option>
			))}
		</Select>
	)
}

const Form = () => {
   const {t} = useTranslation()

	const dispatch = useDispatch()

   const saveResumeDataToStore = (dataResume) => dispatch(resumeActions.createResume(dataResume))

   const input = useInput(saveResumeDataToStore)

   const years = generateArrayOfYears()
	return (
		<FormStyled>
			<Title>{t('educationTitle')}</Title>
			<SubTxt>{t('educationSubText')}</SubTxt>
			<FormControl>
				<Label>{t('schoolName')}</Label>
				<Input onChange={input.onChange} name='schoolName' type='text' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('eduCity')}</Label>
					<Input onChange={input.onChange} name='educationCity' type='text' width='300px' />
				</FormControl>
				<FormControl>
					<Label>{t('eduState')}</Label>
					<Input onChange={input.onChange} name='educationState' type='text' />
				</FormControl>
			</Div>
			<FormControl>
				<Label>{t('field')}</Label>
				<Input onChange={input.onChange} name='field' type='text' />
			</FormControl>
			<Flex direction={'column'}>
				<Flex align='center' justify='space-between'>
					<Label>{t('graduationDate')}</Label>
					<Div>
						<Selection onChange={input.onChange} name = 'educationMonth' data = {month} />
						<Selection onChange={input.onChange} name = 'educationYear' data = {years} />
					</Div>
				</Flex>
			</Flex>
			<BtnGroup>
			    <Link to = '/experience'><BtnBack type='button'>{t('back')}</BtnBack></Link>
				<Link to ='/skills'><BtnNext type = 'button'>{t('next')}</BtnNext></Link>
			</BtnGroup>
		</FormStyled>
	)
}



export default Form
