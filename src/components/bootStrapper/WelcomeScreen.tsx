;import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerGuestRequest, RegisterGuestPayload } from './slices/registerGuestSlice';
import useInstallationInfo, { InstallationInfo} from '../hooks/useInstallationInfo';
import {useAppSelector} from '../hooks/useAppSelector';


const WelcomeScreen = ({navigation}: any) => {
  const guestAccessToken = useAppSelector((state) => state.registerGuest.guestAccessToken);
  const error = useAppSelector((state) => state.registerGuest.error);
  //const loading = useAppSelector((state) => state.registerGuest.loading);

  const installationInfo: InstallationInfo  = useInstallationInfo();
  const deviceId = installationInfo.deviceId;
  const dispatch = useDispatch();
  
  const bootHandler = () => {
    // perform api call
    console.log('Boot');
    console.log(deviceId);
    if(deviceId && deviceId !== null){
      const payload: RegisterGuestPayload = {
        deviceSignatureId: deviceId,
      };
      dispatch(registerGuestRequest(payload));
    }
    // need to dispatch action for registering guest user
  };

  useEffect(() => {
    
    bootHandler();
  },[deviceId, dispatch]);

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="Get Started to fill form" onPress={()=>{navigation.navigate('Home')}} />
      </View>
  );
};

export default WelcomeScreen;
