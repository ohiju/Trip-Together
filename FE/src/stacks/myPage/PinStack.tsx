import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PinStackParams} from '../../interfaces/router/PinStackParams';
import Pin from '../../pages/myPage/Pin';

const PinStack = () => {
  const Stack = createNativeStackNavigator<PinStackParams>();

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
