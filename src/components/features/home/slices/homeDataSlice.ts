import { createSlice } from "@reduxjs/toolkit";

export const homeDataSlice = createSlice({
    name: 'homeData',
    initialState: {
        loading: false,
        data: {},
        error: null,
    },
    reducers:{
        fetchHomeData: (state)=>{
            state.loading = true;
        },
        fetchHomeDataSuccess: (state, action)=>{
            state.loading = false;
            state.data = action.payload;
        },
        fetchHomeDataFailed: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {fetchHomeData, fetchHomeDataFailed, fetchHomeDataSuccess} = homeDataSlice.actions;
export default homeDataSlice.reducer;
