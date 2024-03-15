import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Pin from '../../pages/myPage/Pin';

const PinStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pin_main"
        component={Pin}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PinStack;
