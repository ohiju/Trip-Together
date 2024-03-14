import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyPageMain from '../pages/myPage/Main';

const MyPageStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={MyPageMain}
        options={{
          title: '마이',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageStack;
