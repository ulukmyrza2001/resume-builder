/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Input from '../../UI/Input'
import { generateArrayOfYears } from '../../../utils/helpers/generatedYear'
import { month } from '../../../utils/constants/constants'
import useInput from '../../../hooks/useInput'
import {
   FormStyled,
   FormControl,
   Label,
   BtnGroup,
   BtnNext,
} from '../../../styles/stylesForms'
import Flex from '../../UI/Flex'
import { hideForm } from '../../../store/modalSlice'
import Selection from '../../select/Select'
import { resumesActions } from '../../../store/resumesSlice'
import ChangeToExperience from './ChangeToExperience'

const ExperienceEditForm = () => {
   const dispatch = useDispatch()
   const { t } = useTranslation()
   const { showFormOrList } = useSelector((state) => state.modal)
   const { itemId, resumes } = useSelector((state) => state.resumes)
   const { experienceId } = useSelector((state) => state.resume.resumeData)
   const [currentDate, setCurrentDate] = useState(false)

   const resume =
      resumes.find((el) => el.id === itemId) || resumes[resumes.length - 1]

   const { values, onChange, setValues } = useInput()

   useEffect(() => {
      setValues(resume.experience.find((el) => el.id === experienceId) || {})
   }, [experienceId])

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
   }, [currentDate])

   const editHandler = (id) => {
      if (
         values.jobTitle ||
         values.employer ||
         values.startMonth ||
         values.startYears ||
         values.endMonth ||
         values.endYear
      ) {
         dispatch(
            resumesActions.editExperience({
               values: { ...values, id: Date.now().toString() },
               resumeId: id,
               experienceId,
            })
         )
      }
      dispatch(hideForm())
   }
   const years = generateArrayOfYears()
   return showFormOrList ? (
      <FormStyled>
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
            <BtnNext onClick={() => editHandler(resume.id)} type="button">
               {t('save')}
            </BtnNext>
            <BtnNext onClick={() => dispatch(hideForm())} type="button">
               {t('cancel')}
            </BtnNext>
         </BtnGroup>
      </FormStyled>
   ) : (
      <ChangeToExperience setValues={setValues} />
   )
}

export default ExperienceEditForm
