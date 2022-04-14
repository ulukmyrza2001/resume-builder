import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resumeActions } from '../store/resumeSlice'


let blocker = false;
const useInput = (inputValue = '') => {
	const [values, setValues] = useState(inputValue)
	const dispatch = useDispatch()
	// const [inputTouched, setInputTouched] = useState(false)
	// let error = ''

	// const valueIsValid = values.trim() !== ''
	// const valueInputIsInValid = !valueIsValid && inputTouched

	return {
		onChange: (e) => {
		    const { name, value } = e.target
			setValues(value)
			dispatch(resumeActions.createResume({data : value,name}))
		},
		onBlur: () => {
			// setInputTouched(true)
		},
		onClear: () => {
			// setInputTouched(false)
			setValues('')
		},
		// valueIsValid,
		// valueInputIsInValid,
		values,
		setValues,
		// error,
	}
}

export default useInput
