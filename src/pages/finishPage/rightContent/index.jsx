import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ChangeColor from '../../../components/changeColor/ChangeColor'
import Flex from '../../../components/UI/Flex'
import EditResume from '../../../components/editResume/EditResume'
import { resumesActions } from '../../../store/resumesSlice'

const Resume = ({ changeResumeHandler, resumes }) => {
   return resumes.map((resume) => (
      <ResumeItem
         onClick={() => changeResumeHandler(resume.id)}
         key={resume.id}
      >
         {resume.contact.name}
      </ResumeItem>
   ))
}

const RightContent = () => {
   const dispatch = useDispatch()
   const resumes = useSelector((state) => state.resumes.resumes)

   const changeResumeHandler = (id) => dispatch(resumesActions.findResumeId(id))

   return (
      <BackgroundRightContent>
         <Flex justify="center">
            <EditResume />
         </Flex>
         <Flex justify="space-around">
            <ChangeColor />
            <Resumes>
               <H2>Resumes</H2>
               <Resume
                  changeResumeHandler={changeResumeHandler}
                  resumes={resumes}
               />
            </Resumes>
         </Flex>
      </BackgroundRightContent>
   )
}
const H2 = styled.h2`
   margin-bottom: 10px;
   color: var(--color-title);
`
const BackgroundRightContent = styled.div`
   background-image: var(--left-content);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   width: 40%;
   max-height: 170vh;
`
const Resumes = styled.div`
   border-radius: 3px;
   margin-top: 30px;
   width: 370px;
   padding: 0.5rem;
   max-height: 500px;
   background-color: var(--background-container);
   box-shadow: var(--box-shadow-resumes);
   overflow-y: scroll;
`
const ResumeItem = styled.h4`
   border-radius: 4px;
   width: 100%;
   padding: 0.7rem;
   background-color: var(--background);
   box-shadow: var(--box-shadow-resumes);
   margin-bottom: 10px;
   text-transform: uppercase;
   cursor: pointer;
   transition: 0.2s;
   color: var(--color-resumes);
   &:hover {
      opacity: 0.7;
   }
`

export default RightContent
