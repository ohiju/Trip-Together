import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MyPageTabBarIcon from '../components/myPage/TabBarIcon';
import MypageTabBarLabel from '../components/myPage/TabBarLabel';
import TravelIcon from '../components/travel/TabBarIcon';
import TravelLabel from '../components/travel/TabBarLabel';
import {TabParams} from '../interfaces/router/TabParams';
import FlashMob from '../pages/FlashMob';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';
import MyPageNavigator from './MyPageStack';
import TravelStack from './TravelStack';

const Tab = createBottomTabNavigator<TabParams>();

const TabNavigator = () => {
  const isShown = useAppSelector((state: RootState) => state.tabState.isShown);

  return (
    <Tab.Navigator
      tabBar={isShown ? undefined : () => null}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="trip"
        component={TravelStack}
        options={{
          tabBarIcon: TravelIcon,
          tabBarLabel: TravelLabel,
        }}
      />
      <Tab.Screen name="flashMob" component={FlashMob} options={{}} />
      <Tab.Screen
        name="myPage"
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
