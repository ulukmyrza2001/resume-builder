import { useState } from 'react'

const useInput = (saveResumeDataToStore) => {
	const [values, setValues] = useState('')
	const [name,setName] = useState('')

	return {
		onChange: (e) => {
		    const { name, value } = e.target
			setValues({...values,[name] : value})
			saveResumeDataToStore && saveResumeDataToStore({data : value,name})
			setName(name)
		},
		onBlur: () => {
		},
		onClear: () => {
			setValues({...values,[name] : ''})
		},
		values,
		setValues,
		setName,
	}
}

export default useInput
