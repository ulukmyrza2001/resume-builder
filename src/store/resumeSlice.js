import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../utils/helpers/general'

const initialState = {
	resumeData: getDataFromLocalStorage('resume') || {
		summaryValue: null,
		contact: {},
		summary: [],
		skills: [],
		experience: {},
		education: {},
	},
	resumes: getDataFromLocalStorage('@resumes') || [],
	color: '#464746',
	item: null,
}

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		findItem(state, action) {
			state.item = action.payload
		},
		createContactResume(state, action) {
			state.resumeData.contact = action.payload
		},
		createEducationResume(state, action) {
			state.resumeData.education = action.payload
		},
		createExperienceResume(state, action) {
			state.resumeData.experience = action.payload
		},
		createSummaryResume(state, action) {
			const summarySplited = action.payload.summary.split(/\n/)
			state.resumeData.summary = [...summarySplited]
			state.resumeData.summaryValue = action.payload.summary
		},
		createSkill(state, action) {
			state.resumeData.skills = [
				...state.resumeData.skills,
				{ skill: action.payload, id: Math.random().toString() },
			]
		},
		deleteSkill(state, action) {
			const filteredSkills = state.resumeData.skills.filter((el) => el.id !== action.payload)
			state.resumeData.skills = filteredSkills
		},
		saveResume(state) {
			state.resumes = [
				...state.resumes,
				{ ...state.resumeData, id: Math.random().toString() },
			]
		},
		changeColor(state, action) {
			state.color = action.payload
		},
		//edit//
		editContact(state, action) {
			state.resumes = state.resumes.map((el) => {
				if (el.id === action.payload.id) {
					el.contact = action.payload.values
				}
				if (state.item) state.item.contact = action.payload.values
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
			if (state.item) state.item.education = action.payload.values
		},
		editExperience(state, action) {
			state.resumes = state.resumes.map((el) => {
				if (el.id === action.payload.id) {
					el.experience = action.payload.values
				}
				return el
			})
			if (state.item) state.item.experience = action.payload.values
		},
		editSkill(state, action) {
			state.resumes = state.resumes.map((el) => {
				if (el.id === action.payload.id) {
					el.skills.push({
						skill: action.payload.value,
						id: Math.random().toString(),
					})
				}
				return el
			})
			if (state.item) state.item.skills.push({
					skill: action.payload.value,
					id: Math.random().toString(),
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
			if (state.item) state.item.summary = [...summarySplited]
		},
		deleteResume(state, action) {
			state.resumes = state.resumes.filter(
				(el) => el.id !== action.payload,
			)
			state.item = state.resumes[state.resumes.length - 1]
		},
	},
})
export const resumeActions = resumeSlice.actions
export default resumeSlice
