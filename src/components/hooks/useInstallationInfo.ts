import { useEffect, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceSignatureId } from '../bootStrapper/slices/installationInfoSlice'; // Adjust the import path according to your project structure
import { RootState, AppDispatch } from '../redux/store';

export interface InstallationInfo {
    deviceId: string | null;
    deviceModel: string | null;
}

const useInstallationInfo = (): InstallationInfo => {
    const deviceSignatureId = useSelector((state: RootState) => state.installationInfo.deviceSignatureId);
    const [deviceId, setDeviceId] = useState<string | null>(deviceSignatureId);
    const [deviceModel, setDeviceModel] = useState<string | null>(null);
    
    const dispatch = useDispatch<AppDispatch>();

    const fetchDeviceInfo = async () => {
        let model = DeviceInfo.getModel() ?? '';
        setDeviceModel(model);
        if (deviceId === null || deviceId == undefined || deviceId == 'unavailable') {
            //setDeviceId(deviceSignatureId);
            console.log('fetching device id from DeviceInfo package');
            const deviceSignature = await DeviceInfo.getUniqueId();
            let customId = `${deviceSignature}_${model.replace(/\s/g, "")}`
           
            setDeviceId(customId);
            dispatch(setDeviceSignatureId(customId));
        }
    };
    useEffect(() => {
        fetchDeviceInfo();
    },[]);

    return { deviceId, deviceModel };
};

export default useInstallationInfo;