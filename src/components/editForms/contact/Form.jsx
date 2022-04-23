/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import InputMask from 'react-input-mask'
import Input from '../../UI/Input'
import useInput from '../../../hooks/useInput'
import { resumesActions } from '../../../store/resumesSlice'
import { hideModal } from '../../../store/modalSlice'
import Flex from '../../UI/Flex'
import { FormStyled, FormControl, Label, BtnGroup, BtnNext } from '../styles'

function ContactEditForm() {
   const dispatch = useDispatch()
   const { t } = useTranslation()
   const { itemId, resumes } = useSelector((state) => state.resumes)
   const resume =
      resumes.find((el) => el.id === itemId) || resumes[resumes.length - 1]

   const { name, address, city, state, zip, email, phone } = resume.contact

   const { values, onChange } = useInput({
      name: name || '',
      address: address || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      email: email || '',
      phone: phone || '',
   })

   const editHandler = (id) => {
      dispatch(resumesActions.editContact({ values, id }))
      dispatch(hideModal())
   }
   return (
      <FormStyled>
         <GlobalStyle />
         <FormControl>
            <Label>{t('name')}</Label>
            <Input value={values.name} onChange={onChange} name="name" />
         </FormControl>
         <FormControl>
            <Label>{t('address')}</Label>
            <Input value={values.address} onChange={onChange} name="address" />
         </FormControl>
         <Flex align="center">
            <FormControl>
               <Label>{t('city')}</Label>
               <Input
                  value={values.city}
                  onChange={onChange}
                  name="city"
                  width="220px"
               />
            </FormControl>
            <FormControl>
               <Label>{t('state')}</Label>
               <Input
                  value={values.state}
                  onChange={onChange}
                  name="state"
                  width="100px"
               />
            </FormControl>
            <FormControl>
               <Label>{t('zipcode')}</Label>
               <Input value={values.zip} onChange={onChange} name="zip" />
            </FormControl>
         </Flex>
         <Flex align="center">
            <FormControl>
               <Label>{t('email')}</Label>
               <Input
                  value={values.email}
                  onChange={onChange}
                  name="email"
                  type="email"
                  width="260px"
               />
            </FormControl>
            <FormControl>
               <Label>{t('phone')}</Label>
               <InputMask
                  value={values.phone}
                  onChange={onChange}
                  name="phone"
                  mask={'+\\9\\9\\6\\ (999) 999 999'}
                  className="input"
               />
            </FormControl>
         </Flex>
         <BtnGroup>
            <BtnNext onClick={() => editHandler(resume.id)} type="button">
               {t('save')}
            </BtnNext>
            <BtnNext onClick={() => dispatch(hideModal())} type="button">
               {t('cancel')}
            </BtnNext>
         </BtnGroup>
      </FormStyled>
   )
}
const GlobalStyle = createGlobalStyle`
.input {
   width: 100%;
   padding: 0.7rem 1rem;
   margin-right: 10px;
   outline: none;
   border: 1px solid #cacaca;
}
.input:focus {
   border-color: #00c293;
}
`

export default ContactEditForm
