/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Input from '../../UI/Input'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import useInput from '../../../hooks/useInput'
import Selection from '../../select/Select'
import {
   FormStyled,
   FormControl,
   SubTxt,
   Title,
   Label,
   BtnGroup,
   BtnBack,
   BtnNext,
} from '../styles'
import Flex from '../../UI/Flex'
import { resumeActions } from '../../../store/resumeSlice'

const ExperienceForm = () => {
   const dispatch = useDispatch()
   const { t } = useTranslation()
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
         <Title>{t('experienceTitle')}</Title>
         <SubTxt>{t('experienceSubText')}</SubTxt>
         <FormControl>
            <Label>{t('jobTitle')}</Label>
            <Input
               value={values.jobTitle}
               onChange={onChange}
               name="jobTitle"
               type="text"
            />
         </FormControl>
         <FormControl>
            <Label>{t('employer')}</Label>
            <Input
               value={values.employer}
               onChange={onChange}
               name="employer"
               type="text"
            />
         </FormControl>
         <Flex align="center">
            <FormControl>
               <Label>{t('expCity')}</Label>
               <Input
                  value={values.experienceCity}
                  onChange={onChange}
                  name="experienceCity"
                  type="text"
                  width="300px"
               />
            </FormControl>
            <FormControl>
               <Label>{t('expState')}</Label>
               <Input
                  value={values.experienceState}
                  onChange={onChange}
                  name="experienceState"
                  type="text"
               />
            </FormControl>
         </Flex>
         <Flex direction="column">
            <Flex align="center" justify="space-between">
               <Label>{t('startDate')}</Label>
               <Flex align="center">
                  <Selection
                     value={values.startMonth}
                     onChange={onChange}
                     name="startMonth"
                     data={month}
                  />
                  <Selection
                     value={values.startYears}
                     onChange={onChange}
                     name="startYears"
                     data={years}
                  />
               </Flex>
            </Flex>
            <Flex align="center" justify="space-between">
               <Label>{t('endDate')}</Label>
               <Flex align="center">
                  <Selection
                     value={values.endMonth}
                     onChange={onChange}
                     name="endMonth"
                     data={month}
                  />
                  <Selection
                     value={values.endYear}
                     onChange={onChange}
                     name="endYear"
                     data={years}
                  />
               </Flex>
            </Flex>
         </Flex>
         <BtnGroup>
            <Link to="/skills">
               <BtnBack type="button">{t('back')}</BtnBack>
            </Link>
            <Link to="/education">
               <BtnNext type="button">{t('next')}</BtnNext>
            </Link>
         </BtnGroup>
      </FormStyled>
   )
}

export default ExperienceForm
