import React from 'react'
import { useTranslation } from 'react-i18next'
import { MdOutlineEdit, MdDeleteOutline, MdMore } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FiAlignJustify } from 'react-icons/fi'
import { showForm, hideModal } from '../../../store/modalSlice'
import { resumesActions } from '../../../store/resumesSlice'
import { resumeActions } from '../../../store/resumeSlice'

import Flex from '../../UI/Flex'
import {
   BtnBack,
   BtnGroup,
   BtnNext,
   FormStyled,
} from '../../../styles/stylesForms'
import NotFound from '../../../assets/icons/notFound.png'

const ChangeToExperience = ({ setValues }) => {
   const { t } = useTranslation()
   const dispatch = useDispatch()
   const { resumes, itemId } = useSelector((state) => state.resumes)
   const currentItemExperience =
      resumes.find((el) => el.id === itemId) || resumes[resumes.length - 1]

   const deleteExperienceHandler = (id) =>
      dispatch(
         resumesActions.deleteExperience({
            id,
            resumeId: currentItemExperience.id,
         })
      )

   const editExperienceHandler = (id) => {
      dispatch(resumeActions.saveIdExpereience(id))
      dispatch(showForm())
   }

   const addMoreHandler = () => {
      dispatch(showForm())
      dispatch(resumeActions.removeExperienceItem())
      setValues({})
   }
   let content = (
      <NotFoundExperience>
         Not Found Experience
         <IMG src={NotFound} />
      </NotFoundExperience>
   )

   if (currentItemExperience.experience.length > 0) {
      content = currentItemExperience.experience.map((el) => (
         <ExperienceListContainer key={el.id}>
            <ListNumber>
               <FiAlignJustify />
            </ListNumber>
            <Flex direction="column">
               <AboutExperience>{el.jobTitle}</AboutExperience>
               <DateExperience>
                  {el.startYears}
                  {el.startMonth}
                  &nbsp;
                  {el.endYear}
                  {el.endMonth}
               </DateExperience>
            </Flex>
            <Flex gap="10px">
               <BtnEdit onClick={() => editExperienceHandler(el.id)}>
                  <MdOutlineEdit />
               </BtnEdit>
               <BtnDelete onClick={() => deleteExperienceHandler(el.id)}>
                  <MdDeleteOutline color=" #969696" />
               </BtnDelete>
            </Flex>
         </ExperienceListContainer>
      ))
   }
   return (
      <FormStyled>
         {content}
         <BtnGroup>
            <BtnBack onClick={addMoreHandler} type="button">
               <MdMore /> {t('addMore')}
            </BtnBack>
            <BtnNext onClick={() => dispatch(hideModal())} type="button">
               {t('cancel')}
            </BtnNext>
         </BtnGroup>
      </FormStyled>
   )
}

const NotFoundExperience = styled.h1`
   text-align: center;
   color: var(--color-resumes);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 20px;
`
const IMG = styled.img`
   width: 50px;
   height: 50px;
`
const ExperienceListContainer = styled.div`
   width: 100%;
   padding: 0.5rem;
   display: grid;
   align-items: center;
   grid-template-columns: 0.5fr 4fr 1fr;
   border-bottom: 1px solid;
`
const ListNumber = styled.div`
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-weight: bold;
   border-radius: 50%;
   background: #034250;
`
const AboutExperience = styled.strong`
   line-height: 25px;
   width: 300px;
   word-wrap: break-word;
   font-size: 14px;
   color: var(--color-resumes);
`
const DateExperience = styled.p`
   line-height: 25px;
   width: 300px;
   word-wrap: break-word;
   font-size: 12px;
`
const BtnEdit = styled.button`
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-weight: bold;
   border-radius: 50%;
   background: #00c293;
   border: none;
   :hover {
      opacity: 0.7;
   }
   cursor: pointer;
`
const BtnDelete = styled(BtnEdit)`
   background-color: #fafafa;
   border: 1px solid #969696;
`
export default ChangeToExperience
