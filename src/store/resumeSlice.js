import { createSlice } from '@reduxjs/toolkit'
import { getDataFromLocalStorage } from '../utils/helpers/general'

const initialState = {
	resumeData: getDataFromLocalStorage('resume') || {
		name: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		email: '',
		phone: '',
		summary: [],
		skills: [],
		jobTitle: '',
		employer: '',
		experienceCity: '',
		experienceState: '',
		startYears: '',
		startMonth: '',
		endYear: '',
		endMonth: '',
		schoolName: '',
		educationCity: '',
		educationState: '',
		educationDegree: '',
		field: '',
		educationYear: '',
		educationMonth: '',
	},
	resumes: [],
	color : '#464746',
}

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		getDataFromLocalStorage(state, action) {
			state.resumeData = { ...action.payload } || state.resumeData
		},
		createResume(state, action) {
			if (action.payload.name === 'summary') {
				const summarySplited = action.payload.data.split(/\n/)
				state.resumeData = state.resumeData = {
					...state.resumeData,
					summary: [...summarySplited],
				}
			} else {
				state.resumeData = {
					...state.resumeData,
					[action.payload.name]: action.payload.data,
				}
			}
		},
		createSkill(state, action) {
			state.resumeData = {
				...state.resumeData,
				skills: [
					...state.resumeData.skills,
					{ skill: action.payload, id: Math.random().toString() },
				],
			}
		},
		deleteSkill(state, action) {
			const filteredSkills = state.resumeData.skills.filter(
				(el) => el.id !== action.payload,
			)
			state.resumeData = {
				...state.resumeData,
				skills: filteredSkills,
			}
		},
		saveResume(state) {
			state.resumes = [...state.resumes, state.resumeData]
		},
		changeColor(state,action){
			state.color = action.payload
		}
	},
})
export const resumeActions = resumeSlice.actions
export default resumeSlice
