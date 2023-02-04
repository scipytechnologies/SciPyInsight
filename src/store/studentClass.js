import { createSlice } from "@reduxjs/toolkit";


export const studentClassSlice = createSlice({
    name: 'studentClass',
    initialState: {
        liveClass: true,
        previousClass : false
    },

    reducers: {
        setLiveClass : (state) => {
            state.liveClass = true;
        },
        setPreviousClass : (state) => {
            state.previousClass = true;
        },
        unSetLiveClass : (state) => {
            state.liveClass = false;
        },
        unSetPreviousClass : (state) => {
            state.previousClass = false;
        }
    }
});


export const {setLiveClass, setPreviousClass, unSetLiveClass, unSetPreviousClass} = studentClassSlice.actions
export default studentClassSlice.reducer; 