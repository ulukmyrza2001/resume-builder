import React from 'react'
import styled from 'styled-components'
import { SKILLS } from '../../../utils/constants/constants'


const SearchSkills = ({ value, onClick, showSearchList }) => {
	return (
		value &&
		showSearchList &&
		SKILLS.filter((el) => el.toLowerCase().includes(value.toLowerCase())).map((el) => (
			<SearchingSkill onClick={onClick} key={el}>
				{el}
			</SearchingSkill>
		))
	)
}

const SearchingSkill = styled.li`
	list-style: none;
	width: 100%;
	padding: 0.6rem 1rem;
	font-size: 12px;
	cursor: pointer;
	margin-bottom: 2px;
	background-color: #f3f3f3;
`

export default SearchSkills
