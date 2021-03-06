/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react'
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
} from '../../../styles/stylesForms'
import Flex from '../../UI/Flex'
import { resumeActions } from '../../../store/resumeSlice'
import {
   getDataFromLocalStorage,
   saveToLocalStorage,
} from '../../../utils/helpers/general'

const ExperienceForm = () => {
   const dispatch = useDispatch()
   const { t } = useTranslation()
   const { experience, experienceId } = useSelector(
      (state) => state.resume.resumeData
   )
   const [currentDate, setCurrentDate] = useState(
      getDataFromLocalStorage('current') || false
   )
   const currentItem = experience.find((el) => el.id === experienceId) || {}

   const {
      jobTitle,
      employer,
      experienceCity,
      experienceState,
      startYears,
      startMonth,
      endYear,
      endMonth,
   } = currentItem

   const { values, onChange, setValues } = useInput({
      jobTitle: jobTitle || '',
      employer: employer || '',
      experienceCity: experienceCity || '',
      experienceState: experienceState || '',
      startYears: startYears || '',
      startMonth: startMonth || '',
      endYear: endYear || '',
      endMonth: endMonth || '',
   })

   const handleSubmit = () => {
      if (
         values.jobTitle ||
         values.employer ||
         values.startMonth ||
         values.startYears ||
         values.endMonth ||
         values.endYear
      ) {
         dispatch(
            resumeActions.createExperienceResume({
               ...values,
               id: Date.now().toString(),
            })
         )
      }
   }
   const currentDateHandler = () => {
      setCurrentDate((prev) => {
         return !prev
      })
   }
   useEffect(() => {
      if (currentDate) {
         setValues({ ...values, endMonth: 'current', endYear: '' })
      } else {
         setValues({ ...values, endMonth: '', endYear: '' })
      }
      saveToLocalStorage('current', currentDate)
   }, [currentDate])

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
                     currentDate={currentDate}
                  />
                  <Selection
                     value={values.endYear}
                     onChange={onChange}
                     name="endYear"
                     data={years}
                     currentDate={currentDate}
                  />
               </Flex>
            </Flex>
            <Flex margin="20px 0 0 0" align="center" gap="5px" justify="end">
               <Label>I currently work here</Label>
               <input
                  type="checkbox"
                  checked={currentDate}
                  onChange={currentDateHandler}
               />
            </Flex>
         </Flex>
         <BtnGroup>
            <Link to="/skills">
               <BtnBack type="button">{t('back')}</BtnBack>
            </Link>
            <Link to="/experience-review">
               <BtnNext onClick={handleSubmit} type="button">
                  {t('next')}
               </BtnNext>
            </Link>
         </BtnGroup>
      </FormStyled>
   )
}

export default ExperienceForm
