/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
   FormStyled,
   SubTxt,
   Title,
   BtnGroup,
   BtnNext,
   BtnBack,
} from '../styles'
import Flex from '../../UI/Flex'
import useInput from '../../../hooks/useInput'
import { resumeActions } from '../../../store/resumeSlice'

const SummaryForm = () => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const { summaryValue } = useSelector((state) => state.resume.resumeData)

   const input = useInput({ summary: summaryValue || '' })

   const saveResumeHandler = () => dispatch(resumeActions.saveResume())

   useEffect(() => {
      if (input.values) {
         dispatch(resumeActions.createSummaryResume(input.values))
      }
   }, [input.values, dispatch])
   return (
      <FormStyled>
         <Title>{t('summaryTtile')}</Title>
         <SubTxt>{t('summarySubText')}</SubTxt>
         <AddSummary>
            <Flex align="center" justify="end">
               <AiOutlinePlusCircle />
               Add Pre-written Examples
            </Flex>
         </AddSummary>
         <Textarea
            value={input.values.summary}
            placeholder={t('summaryPlaceholder')}
            onChange={input.onChange}
            cols="6"
            rows="15"
            name="summary"
            maxlength="9"
         />
         <BtnGroup>
            <Link to="/contact">
               <BtnBack type="button">{t('back')}</BtnBack>
            </Link>
            <Link to="/skills">
               <BtnNext onClick={saveResumeHandler} type="button">
                  {t('next')}
               </BtnNext>
            </Link>
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

export default SummaryForm
