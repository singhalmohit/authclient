import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppError } from '../../../common/errors/appError';

export interface RegisterGuestPayload {
    deviceSignatureId: string;
}

interface RegisterGuestState {
    loading: boolean;
    guestAccessToken: string | null;
    error: AppError | null;
}

const initialState: RegisterGuestState = {
    loading: false,
    guestAccessToken: null,
    error: null,
};

const registerGuestSlice = createSlice({
    name: 'registerGuest',
    initialState,
    reducers: {
        registerGuestRequest: (state, action: PayloadAction<RegisterGuestPayload>) => {
            state.loading = true;
            state.error = null;
        },
        registerGuestRequestSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.guestAccessToken = action.payload;
        },
        registerGuestRequestFailed: (state, action: PayloadAction<AppError>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerGuestRequest, registerGuestRequestSuccess, registerGuestRequestFailed } = registerGuestSlice.actions;
export default registerGuestSlice.reducer;