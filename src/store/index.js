import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import resumeSlice from './resumeSlice'

const store = configureStore({
   reducer: {
      resume: resumeSlice.reducer,
      modal: modalSlice.reducer,
   },
})
export default store
