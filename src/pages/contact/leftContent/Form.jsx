import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../../../components/UI/Input'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
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
} from '../../styles'

const Form = () => {
	const dispatch = useDispatch()

	const { t } = useTranslation()

	const saveResumeDataToStore = (dataResume) => dispatch(resumeActions.createResume(dataResume))
	
	const input = useInput(saveResumeDataToStore)

	return (
		<FormStyled>
			<Title>{t('contactTitle')}</Title>
			<SubTxt>{t('contactSubText')}</SubTxt>
			<FormControl>
				<Label>{t('name')}</Label>
				<Input onChange={input.onChange} name='name' />
			</FormControl>
			<FormControl>
				<Label>{t('address')}</Label>
				<Input onChange={input.onChange} name='address' />
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('city')}</Label>
					<Input
						onChange={input.onChange}
						name='city'
						width='220px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('state')}</Label>
					<Input
						onChange={input.onChange}
						name='state'
						width='100px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('zipcode')}</Label>
					<Input onChange={input.onChange} name='zip' />
				</FormControl>
			</Div>
			<Div>
				<FormControl>
					<Label>{t('email')}</Label>
					<Input
						onChange={input.onChange}
						name='email'
						type='email'
						width='260px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('phone')}</Label>
					<Input
						onChange={input.onChange}
						name='phone'
						type='number'
					/>
				</FormControl>
			</Div>
			<BtnGroup>
				<BtnBack>{t('back')}</BtnBack>
				<Link to='/experience'>
					<BtnNext type='button'>{t('next')}</BtnNext>
				</Link>
			</BtnGroup>
		</FormStyled>
	)
}

export default Form
