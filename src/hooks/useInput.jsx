import { useState } from 'react'

const useInput = (defaultValue) => {
   const [names, setNames] = useState('')
   const [values, setValues] = useState(defaultValue)

   return {
      onChange: (e) => {
         const { name, value } = e.target
         setValues({ ...values, [name]: value })
         setNames(names)
      },
      onClear: () => {
         setValues({ ...values, [names]: '' })
      },
      values,
      setValues,
   }
}

export default useInput
