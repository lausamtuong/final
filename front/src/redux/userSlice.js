import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   updateUser:{
        isFetching: false, error: false,success:false
  },
  msg:""
},
  reducers: {
  
    updateStart:(state) =>{
        state.updateUser.isFetching = true;
    },
    updateSuccess:(state,action) =>{
        state.updateUser.isFetching = false;
        state.updateUser.success = true;
        state.msg = action.payload;
    },
    updateError:(state,action) =>{
        state.updateUser.error = false;
        state.updateUser.isFetching = false;
        state.msg = action.payload;
    }
  },
});
export const {
  updateStart,
  updateSuccess,
  updateError
} = userSlice.actions;
export default userSlice.reducer;
