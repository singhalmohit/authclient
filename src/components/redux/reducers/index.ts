import { combineReducers } from '@reduxjs/toolkit';
import installationInfoReducer from '../../bootStrapper/slices/installationInfoSlice';
import registerGuestReducer from '../../bootStrapper/slices/registerGuestSlice';


const rootReducer = combineReducers({
    installationInfo: installationInfoReducer,
    registerGuest: registerGuestReducer,
});

export default rootReducer;