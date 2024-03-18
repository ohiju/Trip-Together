import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MyPageStackParams} from '../interfaces/router/MyPageStackParams';
import MyPageMain from '../pages/myPage/Main';
import Pin from '../pages/myPage/pin/Pin';
import PinConfirm from '../pages/myPage/pin/PinConfirm';
import PinRegist from '../pages/myPage/pin/PinRegist';

const MyPageStack = createNativeStackNavigator<MyPageStackParams>();

const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name="MyMain"
        component={MyPageMain}
        options={{title: '마이'}}
      />
      <MyPageStack.Group
        screenOptions={{
          title: '핀 등록',
          headerTitleAlign: 'center',
        }}>
        <MyPageStack.Screen name="PinMain" component={Pin} />
        <MyPageStack.Screen name="PinRegist" component={PinRegist} />
        <MyPageStack.Screen name="PinConfirm" component={PinConfirm} />
      </MyPageStack.Group>
    </MyPageStack.Navigator>
  );
};

export default MyPageNavigator;
