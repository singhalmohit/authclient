;import { View, Text, Button } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeScreen = ({
  navigation
}: any) => {

  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const userFormData = useSelector((state)=> state.userFormData);


  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="Get Started to fill form" onPress={()=>{navigation.navigate('Home')}} />
      </View>
  );
};

export default WelcomeScreen;
