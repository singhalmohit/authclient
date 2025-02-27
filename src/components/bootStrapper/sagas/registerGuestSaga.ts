import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { registerGuestRequest, registerGuestRequestSuccess, registerGuestRequestFailed, RegisterGuestPayload, RegisterGuestError } from '../slices/registerGuestSlice';
import { PayloadAction } from '@reduxjs/toolkit';



interface RegisterGuestResponse {
    token: string;
}



function* registerGuestWorker(action: PayloadAction<RegisterGuestPayload>) {
    try {
        console.log('Register Guest Worker');
        console.log(action.payload);
        const response: AxiosResponse<RegisterGuestResponse> = yield call(() => axios.post('http://localhost:3000/api/register-guest', action.payload));
        console.log(response.data);
        yield put(registerGuestRequestSuccess(response.data.token));
    } catch (error) {
        console.log('Register Guest Worker Error');
        const axiosError = error as AxiosError;

        // Check if the error has a response and the expected structure
        if (axiosError.response && axiosError.response.data) {
            
            const errorResponse = axiosError.response.data as RegisterGuestError;
            console.log(errorResponse)
            // Dispatch the failure action with the error message
            yield put(registerGuestRequestFailed(errorResponse));
        } else {
            // Fallback error message if the response structure is unexpected
            let defaultError: RegisterGuestError = {
                status: 'error',
                message: 'An unknown error occurred',
            };
            yield put(registerGuestRequestFailed(defaultError));
        }
    }
}

function* registerGuestSaga() {
    yield takeLatest(registerGuestRequest.type, registerGuestWorker);
}

export default registerGuestSaga;