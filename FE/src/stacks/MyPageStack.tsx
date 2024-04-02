import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NotYet from '../assets/data/NotYet';
import EditCompleteBtn from '../components/myPage/profile/EditCompleteBtn';
import AddButton from '../components/myPage/syncManage/AddButton';
import {MyPageStackParams} from '../interfaces/router/myPage/MyPageStackParams';
import CardHistory from '../pages/myPage/CardHistory';
import CardManage from '../pages/myPage/CardManage';
import MyMain from '../pages/myPage/MyMain';
import SyncManage from '../pages/myPage/SyncManage';
import WalletManage from '../pages/myPage/WalletManage';
import ExchangeConfirm from '../pages/myPage/exchange/ExchangeConfirm';
import ExchangeInput from '../pages/myPage/exchange/ExchangeInput';
import ExchangeSearch from '../pages/myPage/exchange/ExchangeSearch';
import ExchangeSelectSync from '../pages/myPage/exchange/ExchangeSelectSync';
import PinConfirm from '../pages/myPage/pin/PinConfirm';
import PinMain from '../pages/myPage/pin/PinMain';
import PinRegist from '../pages/myPage/pin/PinRegist';
import ProfileEdit from '../pages/myPage/profile/ProfileEdit';
import ProfileMain from '../pages/myPage/profile/ProfileMain';
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
      <MyPageStack.Group screenOptions={{headerTitleAlign: 'center'}}>
        <MyPageStack.Screen
          name="WalletManage"
          component={WalletManage}
          options={{title: '내 지갑'}}
        />
        <MyPageStack.Screen
          name="CardManage"
          component={CardManage}
          options={{title: '내 카드'}}
        />
        <MyPageStack.Screen
          name="SyncManage"
          component={SyncManage}
          options={{title: '연동 계좌 관리', headerRight: AddButton}}
        />
        <MyPageStack.Screen
          name="CardHistory"
          component={CardHistory}
          options={{title: '이용 내역'}}
        />
      </MyPageStack.Group>
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
        <MyPageStack.Screen
          name="SyncComplete"
          component={SyncComplete}
          options={{headerLeft: () => null}}
        />
      </MyPageStack.Group>
      <MyPageStack.Group
        screenOptions={{title: '환전 하기', headerTitleAlign: 'center'}}>
        <MyPageStack.Screen name="ExchangeSearch" component={ExchangeSearch} />
        <MyPageStack.Screen
          name="ExchangeSelectSync"
          component={ExchangeSelectSync}
        />
        <MyPageStack.Screen name="ExchangeInput" component={ExchangeInput} />
        <MyPageStack.Screen
          name="ExchangeConfirm"
          component={ExchangeConfirm}
        />
      </MyPageStack.Group>
      <MyPageStack.Group screenOptions={{headerTitleAlign: 'center'}}>
        <MyPageStack.Screen
          name="ProfileMain"
          component={ProfileMain}
          options={{
            fullScreenGestureEnabled: true,
            customAnimationOnGesture: true,
            animation: 'slide_from_bottom',
          }}
        />
        <MyPageStack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{title: '프로필 수정', headerRight: EditCompleteBtn}}
        />
        <MyPageStack.Screen
          name="ProfileTrip"
          component={NotYet}
          options={{title: '여행 히스토리'}}
        />
        <MyPageStack.Screen
          name="ProfileFlashMob"
          component={NotYet}
          options={{title: '번개 히스토리'}}
        />
      </MyPageStack.Group>
    </MyPageStack.Navigator>
  );
};

export default MyPageNavigator;
