import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../../UI/Input'
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
} from '../styles'

function ContactForm({ noTitle = false }) {
	const { name, address, city, state, zip, email, phone } = useSelector(
		(state) => state.resume.resumeData.contact,
	)

	const { t } = useTranslation()

	const { values, onChange } = useInput({
		name: name || '',
		address: address || '',
		city: city || '',
		state: state || '',
		zip: zip || '',
		email: email || '',
		phone: phone || '',
	})
	const dispatch = useDispatch()
     
	useEffect(() => {
		if(!noTitle) dispatch(resumeActions.createContactResume(values))
	}, [values, dispatch,noTitle])

	return (
		<FormStyled>
			{!noTitle && (
				<React.Fragment>
					<Title>{t('contactTitle')}</Title>
					<SubTxt>{t('contactSubText')}</SubTxt>
				</React.Fragment>
			)}
			<FormControl>
				<Label>{t('name')}</Label>
				<Input value={values.name} onChange={onChange} name='name' />
			</FormControl>
			<FormControl>
				<Label>{t('address')}</Label>
				<Input
					value={values.address}
					onChange={onChange}
					name='address'
				/>
			</FormControl>
			<Div>
				<FormControl>
					<Label>{t('city')}</Label>
					<Input
						value={values.city}
						onChange={onChange}
						name='city'
						width='220px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('state')}</Label>
					<Input
						value={values.state}
						onChange={onChange}
						name='state'
						width='100px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('zipcode')}</Label>
					<Input value={values.zip} onChange={onChange} name='zip' />
				</FormControl>
			</Div>
			<Div>
				<FormControl>
					<Label>{t('email')}</Label>
					<Input
						value={values.email}
						onChange={onChange}
						name='email'
						type='email'
						width='260px'
					/>
				</FormControl>
				<FormControl>
					<Label>{t('phone')}</Label>
					<Input
						value={values.phone}
						onChange={onChange}
						name='phone'
						type='number'
					/>
				</FormControl>
			</Div>
			{!noTitle && (
				<BtnGroup>
					<BtnBack>{t('back')}</BtnBack>
					<Link to='/experience'>
						<BtnNext type='button'>{t('next')}</BtnNext>
					</Link>
				</BtnGroup>
			)}
		</FormStyled>
	)
}

export default ContactForm
