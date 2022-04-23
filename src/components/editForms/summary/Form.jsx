/* eslint-disable import/no-named-as-default-member */
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { FormStyled, BtnGroup, BtnNext } from '../styles'
import Flex from '../../UI/Flex'
import useInput from '../../../hooks/useInput'
import { hideModal } from '../../../store/modalSlice'
import { resumesActions } from '../../../store/resumesSlice'

const SummaryEditForm = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const { summaryValue } = useSelector((state) => state.resume.resumeData)
   const { itemId, resumes } = useSelector((state) => state.resumes)
   const resume =
      resumes.find((el) => el.id === itemId) || resumes[resumes.length - 1]

   const { values, onChange } = useInput({ summary: summaryValue || '' })

   const editHandler = () => {
      dispatch(
         resumesActions.editSummary({ value: values.summary, id: resume.id })
      )
      dispatch(hideModal())
   }
   return (
      <FormStyled>
         <AddSummary>
            <Flex align="center" justify="end">
               <AiOutlinePlusCircle />
               Add Pre-written Examples
            </Flex>
         </AddSummary>
         <Textarea
            value={values.summary}
            placeholder={t('summaryPlaceholder')}
            onChange={onChange}
            cols="60"
            rows="15"
            name="summary"
         />
         <BtnGroup>
            <Link to="/finish">
               <BtnNext onClick={editHandler} type="button">
                  {t('save')}
               </BtnNext>
            </Link>
            <BtnNext onClick={() => dispatch(hideModal())} type="button">
               {t('cancel')}
            </BtnNext>
         </BtnGroup>
      </FormStyled>
   )
}

const Textarea = styled.textarea`
   width: 100%;
   padding: 0.7rem 1rem;
   outline: none;
   resize: none;
   font-family: 'Source Sans Pro', Arial, sans-serif;
   border: 1px solid #cacaca;
   line-height: 20px;
   &:focus {
      border-color: #00c293;
   }
`
const AddSummary = styled.h4`
   color: #00c293;
   cursor: pointer;
   margin-bottom: 3px;
`

export default SummaryEditForm
