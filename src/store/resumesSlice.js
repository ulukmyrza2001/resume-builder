import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../utils/helpers/general'

const initialState = {
   resumes: getDataFromLocalStorage('@resumes') || [],
   itemId: null,
}

const resumesSlice = createSlice({
   name: 'resumes',
   initialState,
   reducers: {
      saveResume(state, action) {
         state.resumes = state.resumes.concat(action.payload)
      },
      // edit//
      editContact(state, action) {
         state.resumes = state.resumes.map((el) => {
            if (el.id === action.payload.id) {
               el.contact = action.payload.values
            }
            return el
         })
      },
      editEducation(state, action) {
         state.resumes = state.resumes.map((el) => {
            if (el.id === action.payload.id) {
               el.education = action.payload.values
            }
            return el
         })
      },
      editExperience(state, action) {
         const { values, resumeId, experienceId } = action.payload
         state.resumes = state.resumes.map((el) => {
            if (el.id === resumeId) {
               const currentIndex = el.experience.findIndex(
                  (el) => el.id === experienceId
               )
               if (currentIndex >= 0) {
                  el.experience = el.experience.map((el) => {
                     if (el.id === experienceId) {
                        el = values
                     }
                     return el
                  })
               } else {
                  el.experience = el.experience.concat(values)
               }
            }
            return el
         })
      },
      deleteExperience(state, action) {
         const { resumeId, id } = action.payload
         state.resumes = state.resumes.map((el) => {
            if (el.id === resumeId) {
               el.experience = el.experience.filter((el) => el.id !== id)
            }
            return el
         })
      },
      editSkill(state, action) {
         state.resumes = state.resumes.map((el) => {
            if (el.id === action.payload.id && el.skills.length < 8) {
               el.skills = el.skills.concat({
                  skill: action.payload.value,
                  id: Math.random().toString(),
               })
            }
            return el
         })
      },
      deleteEditSkill(state, action) {
         state.resumes = state.resumes.map((el) => {
            if (el.id === action.payload.resumeId) {
               el.skills = el.skills.filter((el) => el.id !== action.payload.id)
            }
            return el
         })
      },
      editSummary(state, action) {
         const summarySplited = action.payload.value.split(/\n/)
         state.resumes = state.resumes.map((el) => {
            if (el.id === action.payload.id) {
               el.summary = [...summarySplited]
            }
            return el
         })
      },
      deleteResume(state, action) {
         state.resumes = state.resumes.filter((el) => el.id !== action.payload)
      },
      findResumeId(state, action) {
         state.itemId = action.payload
      },
   },
})

export const resumesActions = resumesSlice.actions
export default resumesSlice
