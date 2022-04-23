/* eslint-disable import/no-named-as-default-member */
import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import resumeSlice from './resumeSlice'
import resumesSlice from './resumesSlice'

const store = configureStore({
   reducer: {
      resume: resumeSlice.reducer,
      modal: modalSlice.reducer,
      resumes: resumesSlice.reducer,
   },
})
export default store
