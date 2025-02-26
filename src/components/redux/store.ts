
import { configureStore } from '@reduxjs/toolkit';
import { homeDataSlice } from '../features/home/slices/homeDataSlice';
import { userFormDataSlice } from '../features/home/slices/userFormDataSlice';


const store = configureStore({
  reducer:{
    // @ts-expect-error TS(2322): Type 'Slice<{ loading: boolean; data: {}; error: n... Remove this comment to see the full error message
    homeData: homeDataSlice,
    // @ts-expect-error TS(2322): Type 'Slice<{ email: null; name: null; pass: null;... Remove this comment to see the full error message
    userFormdata: userFormDataSlice,
  },
});

export default store;
