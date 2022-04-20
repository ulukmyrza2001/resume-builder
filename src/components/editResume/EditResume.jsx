import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { showModal } from '../../store/modalSlice'
import ContactEditForm from '../editForms/contact/Form'
import EducationEditForm from '../editForms/education/Form'
import ExperienceEditForm from '../editForms/experience/Form'
import SkillsEditForm from '../editForms/skills/Form'
import SummaryEditForm from '../editForms/summary/Form'
import Modal from '../UI/Modal'

const components = [
	{
		title: 'CONTACTS',
		component: <ContactEditForm />,
	},
	{
		title: 'EDUCATION',
		component: <EducationEditForm />,
	},
	{
		title: 'EXPERIENCE',
		component: <ExperienceEditForm />,
	},
	{
		title: 'SKILLS',
		component: <SkillsEditForm />,
	},
	{
		title: 'SUMMARY',
		component: <SummaryEditForm />,
	},
]

const EditComponents = ({ editHandler }) => {
	return components.map((component) => (
		<EditItem onClick={() => editHandler(component.component)} key={component.title}>
			{component.title}
		</EditItem>
	))
}

const EditResume = () => {
    const modal = useSelector(state=>state.modal.modal)
    const [componentForEdit,setComponentForEdit] = useState(null)
    const dispatch = useDispatch()

const editHandler = (component) =>{
     dispatch(showModal())
     setComponentForEdit(component)
    }
	return (
		<EditStyled>
			{modal && (
				<Modal>
					{componentForEdit}
				</Modal>
			)}
			<H2>EDIT HERE </H2>
			<EditComponents editHandler={editHandler} />
		</EditStyled>
	)
}

const H2 = styled.h2`
	margin-bottom: 10px;
	color: #e9e9e9;
`

const EditStyled = styled.div`
	margin-top: 50px;
	width: 500px;
	padding: 1rem;
	background-color: #00c293;
	box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
`

const EditItem = styled.div`
	width: 100%;
	padding: 0.6rem 1rem;
	background-color: #ffffff;
	margin-bottom: 6px;
	font-size: 20px;
	font-weight: bold;
	color: #57571b;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		opacity: 0.7;
	}
`

export default EditResume
