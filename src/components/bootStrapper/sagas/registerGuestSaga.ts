import { put, call, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { registerGuestRequest, registerGuestRequestSuccess, registerGuestRequestFailed } from '../slices/registerGuestSlice';
import { PayloadAction } from '@reduxjs/toolkit';

interface RegisterGuestPayload {
    deviceSignatureId: string;
}

interface RegisterGuestResponse {
    token: string;
}

interface RegisterGuestError {
    status: string;
    message: string;
}

function* registerGuestWorker(action: PayloadAction<RegisterGuestPayload>) {
    try {
        console.log('Register Guest Worker');
        console.log(action.payload);
        const response: AxiosResponse<RegisterGuestResponse> = yield call(() => axios.post('http://localhost:3000/api/register-guest', action.payload));
        console.log(response.data);
        yield put(registerGuestRequestSuccess(response.data.token));
    } catch (error) {
        // TypeScript type assertion for AxiosError
        const axiosError = error as AxiosError;

        // Check if the error has a response and the expected structure
        if (axiosError.response && axiosError.response.data) {
            console.log(error);
            const errorResponse = axiosError.response.data as {
                status: string;
                message: string;
            };

            // Dispatch the failure action with the error message
            yield put(registerGuestRequestFailed(errorResponse.message));
        } else {
            // Fallback error message if the response structure is unexpected
            yield put(registerGuestRequestFailed('An unknown error occurred'));
        }
    }
}

function* registerGuestSaga() {
    yield takeLatest(registerGuestRequest.type, registerGuestWorker);
}

export default registerGuestSaga;