import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth.js'
import loaderReducer from './loader.js'
import LoginedUserRecducer from './loginedUserSlice.js'
import studentClassReducer from './studentClass.js'
import userReducer  from './userslice.js'

export default configureStore({
   reducer: {
      auth: authReducer,
      studentClass: studentClassReducer,
      loader: loaderReducer,
      loginedUser: LoginedUserRecducer,
      user : userReducer
   }
})