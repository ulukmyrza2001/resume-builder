import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../UI/Input'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'
import {
	FormStyled,
	FormControl,
	Label,
	Div,
	BtnGroup,
	BtnNext,
} from '../styles'
import { hideModal } from '../../../store/modalSlice'

function ContactEditForm() {
	const { item } = useSelector((state) => state.resume)
	const resumes = useSelector((state) => state.resume.resumes)
	const resume = item || resumes[resumes.length - 1]
	const { name, address, city, state, zip, email, phone } = resume.contact

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

	const editHandler = (id) => {
		dispatch(resumeActions.editContact({ values, id }))
		dispatch(hideModal())
	}
	return (
		<FormStyled>
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
			<BtnGroup>
				<BtnNext onClick={() => editHandler(resume.id)} type='button'>
					{t('save')}
				</BtnNext>
			</BtnGroup>
		</FormStyled>
	)
}

export default ContactEditForm
