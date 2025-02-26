
import { configureStore } from '@reduxjs/toolkit';
import { homeDataSlice } from '../features/home/slices/homeDataSlice';
import { userFormDataSlice } from '../features/home/slices/userFormDataSlice';


const store = configureStore({
  reducer:{
    homeData: homeDataSlice,
    userFormdata: userFormDataSlice,
  },
});

export default store;
