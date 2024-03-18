import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyPageTabBarIcon from '../components/myPage/TabBarIcon';
import MypageTabBarLabel from '../components/myPage/TabBarLabel';
import {TabParams} from '../interfaces/router/TabParams';
import FlashMob from '../pages/FlashMob';
import Travel from '../pages/travel/Travel';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';
import MyPageNavigator from './MyPageStack';

const Tab = createBottomTabNavigator<TabParams>();

const TabNavigator = () => {
  const isShown = useAppSelector((state: RootState) => state.tabState.isShown);

  return (
    <Tab.Navigator
      tabBar={isShown ? undefined : () => null}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Trip" component={Travel} options={{}} />
      <Tab.Screen name="FlashMob" component={FlashMob} options={{}} />
      <Tab.Screen
        name="MyPage"
        component={MyPageNavigator}
        options={{
          tabBarIcon: MyPageTabBarIcon,
          tabBarLabel: MypageTabBarLabel,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
