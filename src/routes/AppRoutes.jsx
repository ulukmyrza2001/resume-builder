import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ExperienceReview from '../pages/experienceReview'
// routes constants
import { ROUTES } from '../utils/constants/routes'
import PrivateRoute from './PrivateRoute'
// react-lazy
const Contact = React.lazy(() => import('../pages/contact'))
const Experience = React.lazy(() => import('../pages/experience'))
const Summary = React.lazy(() => import('../pages/summary'))
const Education = React.lazy(() => import('../pages/education'))
const Skills = React.lazy(() => import('../pages/skills'))
const Finish = React.lazy(() => import('../pages/finishPage'))

function AppRoutes() {
   const {
      INDEX,
      CONTACT,
      EXPERIENCE,
      EDUCATION,
      SKILLS,
      FINISH,
      SUMMARY,
      EXPERIENCEREVIEW,
   } = ROUTES
   return (
      <Routes>
         <Route path={INDEX.path} element={<Navigate to={CONTACT.path} />} />
         <Route path={CONTACT.path} element={<Contact />} />
         <Route path={SUMMARY.path} element={<Summary />} />
         <Route path={SKILLS.path} element={<Skills />} />
         <Route path={EXPERIENCE.path} element={<Experience />} />
         <Route path={EXPERIENCEREVIEW.path} element={<ExperienceReview />} />
         <Route path={EDUCATION.path} element={<Education />} />
         <Route
            path={FINISH.path}
            element={
               <PrivateRoute>
                  <Finish />
               </PrivateRoute>
            }
         />
      </Routes>
   )
}

export default AppRoutes
