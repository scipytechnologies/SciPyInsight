import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  name : "nil",
  OrgName : "nil"
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers: {
     loginuser : (state,action ) => {
         state.name = action.payload.email
         state.OrgName = action.payload.role
     }
    
  },
})

// Action creators are generated for each case reducer function
export const { loginuser } = userSlice.actions

export default userSlice.reducer