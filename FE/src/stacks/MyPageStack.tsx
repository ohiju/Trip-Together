import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MyPageStackParams} from '../interfaces/router/myPage/MyPageStackParams';
import MyMain from '../pages/myPage/MyMain';
import ExchangeMain from '../pages/myPage/exchange/ExchangeMain';
import PinConfirm from '../pages/myPage/pin/PinConfirm';
import PinMain from '../pages/myPage/pin/PinMain';
import PinRegist from '../pages/myPage/pin/PinRegist';
import SyncComplete from '../pages/myPage/sync/SyncComplete';
import SyncConfirm from '../pages/myPage/sync/SyncConfirm';
import SyncMain from '../pages/myPage/sync/SyncMain';
import SyncSelect from '../pages/myPage/sync/SyncSelect';

const MyPageStack = createNativeStackNavigator<MyPageStackParams>();

const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name="MyMain"
        component={MyMain}
        options={{title: '마이'}}
      />
      <MyPageStack.Group
        screenOptions={{title: '핀 등록', headerTitleAlign: 'center'}}>
        <MyPageStack.Screen name="PinMain" component={PinMain} />
        <MyPageStack.Screen name="PinRegist" component={PinRegist} />
        <MyPageStack.Screen name="PinConfirm" component={PinConfirm} />
      </MyPageStack.Group>
      <MyPageStack.Group
        screenOptions={{title: '계좌 연동', headerTitleAlign: 'center'}}>
        <MyPageStack.Screen name="SyncMain" component={SyncMain} />
        <MyPageStack.Screen name="SyncSelect" component={SyncSelect} />
        <MyPageStack.Screen name="SyncConfirm" component={SyncConfirm} />
        <MyPageStack.Screen name="SyncComplete" component={SyncComplete} />
      </MyPageStack.Group>
      <MyPageStack.Group
        screenOptions={{title: '환전 하기', headerTitleAlign: 'center'}}>
        <MyPageStack.Screen name="ExchangeMain" component={ExchangeMain} />
      </MyPageStack.Group>
    </MyPageStack.Navigator>
  );
};

export default MyPageNavigator;
