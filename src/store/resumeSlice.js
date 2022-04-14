import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	resumeData: JSON.parse(localStorage.getItem('resume')) || {
		name: 'CONTACT',
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
}

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		createResume(state, action) {
			console.log(action.payload);
			if (action.payload.name === 'skills') {
				return
			}else if(action.payload.name === 'summary'){
				const summarySplited = action.payload.data.split(/\n/)
				state.resumeData = state.resumeData = {
					...state.resumeData,
					summary: [
						...summarySplited
					],
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
					{ skill: action.payload, id: Math.random().toString()},
				],
			}
		},
		deleteSkill(state,action){
			const filteredSkills = state.resumeData.skills.filter(el=>el.id !== action.payload)
			state.resumeData = {
				...state.resumeData,
				skills:filteredSkills,
			}
		}
	},
})
export const resumeActions = resumeSlice.actions
export default resumeSlice
