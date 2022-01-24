import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import mainReducer from "./mainSlice"

export default configureStore({
    reducer:{
        auth:authReducer,
        main:mainReducer
    }
})