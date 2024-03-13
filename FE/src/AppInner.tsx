import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useState} from 'react';
import {RootBeforeLoginStackParams} from './interfaces/router/RootBeforeLoginStackParams';
import Login from './pages/Login';
import SocialLogin from './pages/SocialLogin';
import Lightning from './pages/lightning';
import MyPage from './pages/mypage';
import Travel from './pages/travel';

function AppInner() {
  const [isLoggedIn] = useState(false);

  const Tab = createBottomTabNavigator();
  const BeforeLoginStack =
    createNativeStackNavigator<RootBeforeLoginStackParams>();

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
        <BeforeLoginStack.Navigator>
          <BeforeLoginStack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <BeforeLoginStack.Screen
            name="SocialLogin"
            component={SocialLogin}
            options={{headerShown: false}}
          />
        </BeforeLoginStack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
