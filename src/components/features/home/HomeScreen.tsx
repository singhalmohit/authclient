import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import useInstallationInfo, { InstallationInfo} from '../../hooks/useInstallationInfo'; 

const HomeScreen = () => {
  const deviceInfo: InstallationInfo  = useInstallationInfo();
  const HomeHandler = () => {
    // perform api call
    console.log('Home Screen');
    console.log(deviceInfo.deviceId);
  };

  useEffect(() => {
    
    HomeHandler();
  },[]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

