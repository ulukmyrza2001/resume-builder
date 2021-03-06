import React, { Fragment, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Grid from '../../components/UI/Grid'
import Flex from '../../components/UI/Flex'
import { saveToLocalStorage } from '../../utils/helpers/general'
import { resumesActions } from '../../store/resumesSlice'

const Resume = React.forwardRef((props, ref) => {
   const dispatch = useDispatch()
   const { t } = useTranslation()
   const { itemId, resumes } = useSelector((state) => state.resumes)
   const { color } = useSelector((state) => state.resume)

   const lastItem = resumes[resumes.length - 1]

   const currentItemResume = resumes.find((el) => el.id === itemId) || lastItem

   const { contact, education, experience, skills, summary } = currentItemResume

   useEffect(() => {
      saveToLocalStorage('@resumes', resumes)
   }, [resumes])

   const deleteResumeHandler = () => {
      dispatch(resumesActions.deleteResume(currentItemResume.id))
      if (resumes.length === 1) {
         localStorage.clear()
         // window.location.reload()
      }
   }

   return (
      <>
         <GlobalStyle color={color} />
         <Flex justify="center">
            <DeleteResume onClick={deleteResumeHandler}>
               <RiDeleteBin7Fill /> Delete This Resume
            </DeleteResume>
         </Flex>
         <ContainerResume ref={ref}>
            <Title>{contact.name || t('contactInformation')}</Title>
            <HR />
            <Text>
               <Grid columns="1fr 1fr">
                  <div>
                     <b>{t('address')} : </b> {contact.address}
                  </div>
                  <div>
                     <b>{t('city')} : </b> {contact.city}
                  </div>
               </Grid>
            </Text>
            <Grid columns="1fr 1fr">
               <Text>
                  <b>{t('state')} : </b> {contact.state}
               </Text>
               <Text>
                  <b>{t('zipcode')} : </b> {contact.zip}
               </Text>
            </Grid>
            <Text>
               <b>{t('email')} : </b> {contact.email}
            </Text>
            <Text>
               <b>{t('phone')} : </b> {contact.phone}
            </Text>
            <SubTtile>{t('summaryTtile')}</SubTtile>
            <HR />
            <List>
               {summary && summary.map((el) => <Text key={el}>{el}</Text>)}
            </List>
            <SubTtile>{t('skills')}</SubTtile>
            <HR />
            <List>
               <Grid columns="2fr 2fr">
                  {skills &&
                     skills.map((skill) => (
                        <Li key={skill.id}>{skill.skill}</Li>
                     ))}
               </Grid>
            </List>
            <SubTtile>{t('experience')}</SubTtile>
            {experience.map((el) => (
               <Fragment key={el.id}>
                  <HR />
                  <Flex justify="space-between">
                     <Text>
                        <b>{t('jobTitle')} : </b> {el.jobTitle}
                     </Text>
                     <Cursiv>
                        {el.startMonth}&nbsp;{el.startYears},{el.endMonth}&nbsp;
                        {el.endYear}
                     </Cursiv>
                  </Flex>
                  <Text>
                     <b>{t('employer')} : </b> {el.employer}
                  </Text>
                  <Grid columns="1fr 1fr">
                     <Text>
                        <b>{t('city')} : </b> {Element.experienceCity}
                     </Text>
                     <Text>
                        <b>{t('state')} : </b> {el.experienceState}
                     </Text>
                  </Grid>
               </Fragment>
            ))}
            <SubTtile>{t('education')}</SubTtile>
            <HR />
            <Flex justify="space-between">
               <Text>
                  <b>{t('field')} : </b> {education.field}
               </Text>
               <Cursiv>
                  {education.educationMonth}&nbsp;
                  {education.educationYear}
               </Cursiv>
            </Flex>
            <Text>
               <b>{t('schoolName')} : </b> {education.schoolName}
            </Text>
            <Grid columns="1.5fr 1.5fr">
               <Text>
                  <b>{t('state')} : </b> {education.educationState}
               </Text>
               <Text>
                  <b>{t('city')} : </b> {education.educationCity}
               </Text>
            </Grid>
         </ContainerResume>
      </>
   )
})
const DeleteResume = styled.button`
   width: 800px;
   box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.3);
   padding: 0.5rem 2.8rem;
   font-size: 18px;
   color: #243a50;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 4px;
   transition: 0.2s;
   cursor: pointer;
   &:hover {
      background-color: #bd141494;
   }
`
const HR = styled.hr`
   color: #b9b9b9;
   margin-top: 10px;
`
const ContainerResume = styled.div`
   position: relative;
   width: 800px;
   height: 1100px;
   padding: 50px;
   background-color: #ffff;
   box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.3);
   margin: 0 auto;
`
const Title = styled.h1`
   font-size: 40px;
   text-align: center;
   text-transform: uppercase;
   margin-bottom: 10px;
`
const SubTtile = styled.h2`
   font-size: 30px;
   margin: 10px 0;
`
const Text = styled.p`
   word-wrap: break-word;
   line-height: 170%;
`
const Cursiv = styled.address``

const List = styled.ul``

const Li = styled.li`
   margin-left: 20px;
`
const GlobalStyle = createGlobalStyle`
    h2,h1{
		color : ${(props) => props.color || '#464746'};
	}
    address,p,li{
		font-size:  15px;
        line-height: 35px;
        color: gray;
    }
`

export default Resume
