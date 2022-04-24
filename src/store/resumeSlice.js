/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../utils/helpers/general'

const initialState = {
   resumeData: getDataFromLocalStorage('resume') || {
      summaryValue: null,
      contact: {},
      summary: [],
      skills: [],
      experience: [],
      education: {},
      experienceId: null,
   },

   color: '#464746',
}

const resumeSlice = createSlice({
   name: 'resume',
   initialState,
   reducers: {
      createContactResume(state, action) {
         state.resumeData.contact = action.payload
      },
      createEducationResume(state, action) {
         state.resumeData.education = action.payload
      },
      createExperienceResume(state, action) {
         const currentIndexExperience = state.resumeData.experience.findIndex(
            (el) => el.id === state.resumeData.experienceId
         )
         if (currentIndexExperience >= 0) {
            state.resumeData.experience = state.resumeData.experience.map(
               (el) => {
                  if (el.id === state.resumeData.experienceId) {
                     el = action.payload
                  }
                  return el
               }
            )
         } else {
            state.resumeData.experience = state.resumeData.experience.concat(
               action.payload
            )
         }
      },
      createSummaryResume(state, action) {
         const summarySplited = action.payload.summary.split(/\n/)
         state.resumeData.summary = [...summarySplited]
         state.resumeData.summaryValue = action.payload.summary
      },
      createSkill(state, action) {
         if (state.resumeData.skills.length === 8) return
         state.resumeData.skills = [
            ...state.resumeData.skills,
            { skill: action.payload, id: Math.random().toString() },
         ]
      },
      deleteSkill(state, action) {
         const filteredSkills = state.resumeData.skills.filter(
            (el) => el.id !== action.payload
         )
         state.resumeData.skills = filteredSkills
      },
      changeColor(state, action) {
         state.color = action.payload
      },
      deleteExperience(state, action) {
         state.resumeData.experience = state.resumeData.experience.filter(
            (el) => el.id !== action.payload
         )
      },
      saveIdExpereience(state, action) {
         state.resumeData.experienceId = action.payload
      },
      removeExperienceItem(state) {
         state.experienceId = null
      },
   },
})
export const resumeActions = resumeSlice.actions
export default resumeSlice
