import { useState } from 'react'

const useInput = (saveResumeDataToStore) => {
	const [values, setValues] = useState('')
	const [inputTouched, setInputTouched] = useState(false)
	const [name,setName] = useState('')

	const valueIsValid = name && values[name].trim() !== ''
	const valueInputIsInValid = valueIsValid && inputTouched

	return {
		onChange: (e) => {
		    const { name, value } = e.target
			setValues({...values,[name] : value})
			saveResumeDataToStore && saveResumeDataToStore({data : value,name})
			setName(name)
		},
		onBlur: () => {
			setInputTouched(true)
		},
		onClear: () => {
			setInputTouched(false)
			setValues(values,values[name] = '')
		},
		valueIsValid,
		valueInputIsInValid,
		values,
		setValues,
		setName,
	}
}

export default useInput
