import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyPageMain from '../pages/myPage/Main';
import Pin from '../pages/myPage/Pin';

const MyPageStack = createNativeStackNavigator();

const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="myMain" component={MyPageMain} />
      <MyPageStack.Group>
        <MyPageStack.Screen name="pinMain" component={Pin} />
      </MyPageStack.Group>
    </MyPageStack.Navigator>
  );
};

export default MyPageNavigator;
