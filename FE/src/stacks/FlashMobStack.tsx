import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ToChat from '../components/flashMob/ChatButton';
import {FlashMobStackParams} from '../interfaces/router/flashMob/FlashMobStackParams';
import PlaceDetail from '../pages/common/PlaceDetail';
import PlaceInfoList from '../pages/common/PlaceInfoList';
import AllFlash from '../pages/flashMob/AllFlash';
import ChatMain from '../pages/flashMob/ChatMain';
import ChatRoom from '../pages/flashMob/ChatRoom';
import FlashMain from '../pages/flashMob/FlashMain';
import MakeFlash from '../pages/flashMob/MakeFlash';
import MoneyGet from '../pages/flashMob/MoneyGet';
import MoneyGive from '../pages/flashMob/MoneyGive';
import MoneyList from '../pages/flashMob/MoneyList';

const FlashMobStack = createNativeStackNavigator<FlashMobStackParams>();

const FlashMobNavigator = () => {
  return (
    <FlashMobStack.Navigator>
      <FlashMobStack.Screen
        name="FlashMain"
        component={FlashMain}
        options={{title: '번개 모임', headerRight: ToChat}}
      />
      <FlashMobStack.Group screenOptions={{title: '', headerRight: ToChat}}>
        <FlashMobStack.Screen name="FlashPlaces" component={PlaceInfoList} />
        <FlashMobStack.Screen name="FlashPlace" component={PlaceDetail} />
        <FlashMobStack.Screen name="FlashCreate" component={MakeFlash} />
        <FlashMobStack.Screen name="FlashList" component={AllFlash} />
      </FlashMobStack.Group>
      <FlashMobStack.Group
        screenOptions={{title: '채팅', headerTitleAlign: 'center'}}>
        <FlashMobStack.Screen name="ChatMain" component={ChatMain} />
        <FlashMobStack.Screen name="ChatRoom" component={ChatRoom} />
        <FlashMobStack.Screen
          name="Settlement"
          component={MoneyGet}
          options={{title: '정산'}}
        />
        <FlashMobStack.Screen
          name="Remittance"
          component={MoneyGive}
          options={{title: '송금'}}
        />
        <FlashMobStack.Screen
          name="Transaction"
          component={MoneyList}
          options={{title: '내역'}}
        />
      </FlashMobStack.Group>
    </FlashMobStack.Navigator>
  );
};

export default FlashMobNavigator;
