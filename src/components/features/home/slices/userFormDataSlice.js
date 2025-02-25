import { createSlice } from "@reduxjs/toolkit";


export const userFormDataSlice = createSlice({
    name: 'userFormData',
    initialState:{
        email:null,
        name:null,
        pass:null,
    },
    reducers:{
        submitUserInfo:(state, action)=>{
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.pass = action.payload.pass;
        },
    },
});

export const {submitUserInfo} = userFormDataSlice.actions;
export default userFormDataSlice.reducer;

