import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {resumes} = useSelector((state)=>state.resume)
    if(resumes.length === 0) {
        return <Navigate to = '/' />
    }
  return children
}

export default PrivateRoute