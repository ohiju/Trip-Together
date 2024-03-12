import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Travel from './pages/travel';
import MyPage from './pages/mypage';
import Lightning from './pages/lightning';
import SignIn from './pages/SignIn';

export type RootStackParamList = {
  SignIn: undefined;
};

function AppInner() {
  const [isLoggedIn] = useState(true);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {isLoggedIn ? ( // 추가 조건을 달아서 경우에 따라 탭 바가 안나오도록 설정할 것
        <Tab.Navigator>
          <Tab.Screen
            name="여행"
            component={Travel}
            options={{
              title: '여행',
              // 아이콘 추가
            }}
          />
          <Tab.Screen
            name="번개"
            component={Lightning}
            options={{
              title: '번개',
              // 아이콘 추가
            }}
          />
          <Tab.Screen
            name="마이"
            component={MyPage}
            options={{
              title: '마이',
              // 아이콘 추가
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
