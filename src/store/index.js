import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resumeSlice";

const store = configureStore({
    reducer : {
        resume : resumeSlice.reducer
    },
})
export default store