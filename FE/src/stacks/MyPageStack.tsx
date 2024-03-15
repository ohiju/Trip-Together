import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MyPageStackParams} from '../interfaces/router/MyPageStackParams';
import MyPageMain from '../pages/myPage/Main';
import ExchangeStack from './myPage/ExchangeStack';
import PinStack from './myPage/PinStack';

const MyPageStack = () => {
  const Stack = createNativeStackNavigator<MyPageStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="my_main"
        component={MyPageMain}
        options={{
          title: '마이',
        }}
      />
      <Stack.Screen
        name="pin"
        component={PinStack}
        options={{
          title: '핀 등록',
        }}
      />
      <Stack.Screen
        name="exchange"
        component={ExchangeStack}
        options={{
          title: '환전하기',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyPageStack;
