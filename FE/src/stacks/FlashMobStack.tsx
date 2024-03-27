import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ToChat from '../components/flashMob/ToChat';
import {FlashMobStackParams} from '../interfaces/router/flashMob/FlashMobStackParams';
import FlashMain from '../pages/flashMob/FlashMain';
import ChatMain from '../pages/flashMob/ChatMain';
import ChatRoom from '../pages/flashMob/ChatRoom';
import PlaceInfoList from '../pages/common/PlaceInfoList';
import PlaceDetail from '../pages/common/PlaceDetail';
import MakeFlash from '../pages/flashMob/MakeFlash';
import AllFlash from '../pages/flashMob/AllFlash';
import MoneyGet from '../pages/flashMob/MoneyGet';
import MoneyGive from '../pages/flashMob/MoneyGive';
import MoneyList from '../pages/flashMob/MoneyList';

const FlashMobStack = () => {
  const Stack = createNativeStackNavigator<FlashMobStackParams>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="flash_main"
        component={FlashMain}
        options={{
          title: '번개 모임',
          headerRight: ToChat,
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="flashmobs"
          component={PlaceInfoList}
          options={{
            title: '',
            headerRight: ToChat,
          }}
        />
        <Stack.Screen
          name="flashplace"
          component={PlaceDetail}
          options={{
            title: '',
            headerRight: ToChat,
          }}
        />
        <Stack.Screen
          name="makeflash"
          component={MakeFlash}
          options={{
            title: '',
            headerRight: ToChat,
          }}
        />
        <Stack.Screen
          name="allflash"
          component={AllFlash}
          options={{
            title: '',
            headerRight: ToChat,
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="chat_main"
          component={ChatMain}
          options={{
            title: '채팅',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="chatroom"
          component={ChatRoom}
          options={{
            title: '채팅',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MoneyGet"
          component={MoneyGet}
          options={{
            title: '정산',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MoneyGive"
          component={MoneyGive}
          options={{
            title: '송금',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MoneyList"
          component={MoneyList}
          options={{
            title: '내역',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FlashMobStack;
