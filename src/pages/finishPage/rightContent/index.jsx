import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ChangeColor from '../../../components/changeColor/ChangeColor'
import Flex from '../../../components/UI/Flex'
import EditResume from '../../../components/editResume/EditResume'
import { resumeActions } from '../../../store/resumeSlice'

const Resume = ({ changeResumeHandler, resumes }) => {
   return resumes.map((resume) => (
      <ResumeItem onClick={() => changeResumeHandler(resume)} key={resume.id}>
         {resume.contact.name}
      </ResumeItem>
   ))
}

const RightContent = () => {
   const dispatch = useDispatch()
   const resumes = useSelector((state) => state.resume.resumes)

   const changeResumeHandler = (resume) =>
      dispatch(resumeActions.findItem(resume))

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
   color: #263764;
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
   background-color: whitesmoke;
   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
   overflow-y: scroll;
`
const ResumeItem = styled.h4`
   border-radius: 4px;
   width: 100%;
   padding: 0.7rem;
   background-color: white;
   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
   margin-bottom: 10px;
   text-transform: uppercase;
   cursor: pointer;
   transition: 0.2s;
   color: #223f58;
   &:hover {
      opacity: 0.7;
   }
`

export default RightContent
