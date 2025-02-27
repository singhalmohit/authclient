import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterGuestState {
    loading: boolean;
    guestAccessToken: string | null;
    error: string | null;
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
        registerGuestRequest: (state, action: PayloadAction<string>) => {
            state.loading = true;
            state.error = null;
        },
        registerGuestRequestSuccess: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.guestAccessToken = action.payload;
        },
        registerGuestRequestFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerGuestRequest, registerGuestRequestSuccess, registerGuestRequestFailed } = registerGuestSlice.actions;
export default registerGuestSlice.reducer;