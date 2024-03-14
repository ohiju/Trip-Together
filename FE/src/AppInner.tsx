import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import TabBarIcon from './components/myPage/TabBarIcon';
import TabBarLabel from './components/myPage/TabBarLabel';
import {RootStackParams} from './interfaces/router/RootStackParams';
import FlashMob from './pages/FlashMob';
import Login from './pages/Login';
import SocialLogin from './pages/SocialLogin';
import Travel from './pages/Travel';
import MyPageStack from './stacks/MyPageStack';
import {RootState} from './store';
import {useAppSelector} from './store/hooks';

function AppInner() {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator<RootStackParams>();

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
            component={FlashMob}
            options={{
              title: '번개',
              // 아이콘 추가
            }}
          />
          <Tab.Screen
            key="myPage"
            name="myPage"
            component={MyPageStack}
            options={{
              title: '마이',
              headerShown: false,
              tabBarIcon: TabBarIcon,
              tabBarLabel: TabBarLabel,
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SocialLogin"
            component={SocialLogin}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
