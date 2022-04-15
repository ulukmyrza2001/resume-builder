import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { resumeActions } from '../store/resumeSlice'

const useInput = () => {
	const [values, setValues] = useState({})

	return {
		onChange: (e) => {
			const { name, value } = e.target
			setValues({ ...values, [name]: value })
		},
		onBlur: () => {},
		onClear: () => {
			setValues('')
		},
		values,
		setValues,
	}
}

export default useInput
