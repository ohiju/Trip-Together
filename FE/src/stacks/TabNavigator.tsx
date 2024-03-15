import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyPageTabBarIcon from '../components/myPage/TabBarIcon';
import MypageTabBarLabel from '../components/myPage/TabBarLabel';
import {TabParams} from '../interfaces/router/TabParams';
import FlashMob from '../pages/FlashMob';
import Travel from '../pages/Travel';
import MyPageStack from './MyPageStack';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParams>();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="trip"
          component={Travel}
          options={{
            title: '여행',
            // 아이콘 추가
          }}
        />
        <Tab.Screen
          name="flashMob"
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
            tabBarIcon: MyPageTabBarIcon,
            tabBarLabel: MypageTabBarLabel,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
