import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Exchange from '../pages/myPage/Exchange';
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
        }}
      />
      <Stack.Screen
        name="exchange"
        component={Exchange}
        options={{
          title: '환전',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageStack;
