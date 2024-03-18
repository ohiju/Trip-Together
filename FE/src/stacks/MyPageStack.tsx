import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MyPageMain from '../pages/myPage/Main';
import Pin from '../pages/myPage/Pin';

const MyPageStack = createNativeStackNavigator();

const Styles = StyleSheet.create({
  header: {
    shadowOpacity: 0,
  },
});

const MyPageNavigator = () => {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name="myMain"
        component={MyPageMain}
        options={{title: '마이'}}
      />
      <MyPageStack.Group
        screenOptions={{
          title: '핀 등록',
          headerTitleAlign: 'center',
        }}>
        <MyPageStack.Screen name="pinMain" component={Pin} />
      </MyPageStack.Group>
    </MyPageStack.Navigator>
  );
};

export default MyPageNavigator;
