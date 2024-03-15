import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PinStackParams} from '../../interfaces/router/PinStackParams';
import Pin from '../../pages/myPage/Pin';

const PinStack = () => {
  const Stack = createNativeStackNavigator<PinStackParams>();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="pin_main" component={Pin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PinStack;
