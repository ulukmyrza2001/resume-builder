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
import { MdEdit } from 'react-icons/md'

const components = [
	{
		title: 'EDIT CONTACTS',
		component: <ContactEditForm />,
	},
	{
		title: 'EIDT SUMMARY',
		component: <SummaryEditForm />,
	},
	{
		title: 'EDIT SKILLS',
		component: <SkillsEditForm />,
	},
	{
		title: 'EDIT EXPERIENCE',
		component: <ExperienceEditForm />,
	},
	{
		title: 'EDIT EDUACTION',
		component: <EducationEditForm />,
	},
]

const EditComponents = ({ editHandler }) => {
	return components.map((component) => (
		<EditItem onClick={() => editHandler(component.component)} key={component.title}>
			{component.title}
			<MdEdit />
		</EditItem>
	))
}

const EditResume = () => {
	const dispatch = useDispatch()
	const modal = useSelector((state) => state.modal.modal)

	const [componentForEdit, setComponentForEdit] = useState(null)

	const editHandler = (component) => {
		dispatch(showModal())
		setComponentForEdit(component)
	}
	return (
		<EditStyled className='edit'>
			{modal && <Modal>{componentForEdit}</Modal>}
			<EditComponents editHandler={editHandler} />
		</EditStyled>
	)
}

export const EditStyled = styled.div`
	margin-top: 20px;
	width: 90%;
	height: 100%;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.3);
	box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const EditItem = styled.button`
	width: 100%;
	margin-bottom: 6px;
	padding: 0.6rem 1rem;
	background-color: #ffffff;
	font-size: 20px;
	font-weight: bold;
	color: #1b2357;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	cursor: pointer;
	transition: 0.2s;
	border: none;
	&:hover {
		opacity: 0.7;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export default EditResume
