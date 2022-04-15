import { useDispatch } from "react-redux"
import { resumeActions } from "../../store/resumeSlice"
const dispatch = useDispatch()
export const saveResumeDataToStore = (dataResume) =>{
    dispatch(resumeActions.createResume(dataResume))
}