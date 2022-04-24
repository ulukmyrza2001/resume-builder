import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
   name: 'modal',
   initialState: { modal: false, showFormOrList: false },
   reducers: {
      showModal(state) {
         state.modal = true
      },
      hideModal(state) {
         state.modal = false
      },
      showForm(state) {
         state.showFormOrList = true
      },
      hideForm(state) {
         state.showFormOrList = false
      },
   },
})
export const { showModal, hideModal, showForm, hideForm } = modalSlice.actions
export default modalSlice
