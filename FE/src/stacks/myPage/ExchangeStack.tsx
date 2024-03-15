import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Exchange from '../../pages/myPage/Exchange';

const ExchangeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="exchange_main"
        component={Exchange}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ExchangeStack;
