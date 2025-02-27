;import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerGuestRequest } from './slices/registerGuestSlice';
import useInstallationInfo, { InstallationInfo} from '../hooks/useInstallationInfo';

const WelcomeScreen = ({navigation}: any) => {
  const installationInfo: InstallationInfo  = useInstallationInfo();
  const dispatch = useDispatch();
  const bootHandler = () => {
    // perform api call
    console.log('Boot');
    console.log(installationInfo.deviceId);
    // if(installationInfo && installationInfo.deviceId !== null){
    //   const payload = {
    //     deviceSignatureId: installationInfo.deviceId,
    //   };
    //   dispatch(registerGuestRequest(payload));
    // }
    // need to dispatch action for registering guest user
  };

  useEffect(() => {
    
    bootHandler();
  },[installationInfo]);

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="Get Started to fill form" onPress={()=>{navigation.navigate('Home')}} />
      </View>
  );
};

export default WelcomeScreen;
