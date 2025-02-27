import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InstallationInfoState {
    deviceSignatureId: string | null;
}

const initialState: InstallationInfoState = {
    deviceSignatureId: null,
};

const installationInfoSlice = createSlice({
    name: 'installationInfo',
    initialState,
    reducers: {
        setDeviceSignatureId: (state, action: PayloadAction<string | null>) => {
            state.deviceSignatureId = action.payload;
        },
    },
});

export const { setDeviceSignatureId } = installationInfoSlice.actions;
export default installationInfoSlice.reducer;