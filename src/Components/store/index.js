import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import manageEmailReducer from './manage-email-reducer.js'
import userSlice from "./userSlice";


const store=configureStore({reducer:{auth:authReducer,mailmanager:manageEmailReducer}})

export default store;