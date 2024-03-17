import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../pages/Login';
import SocialLogin from '../pages/SocialLogin';
import {RootState} from '../store';
import {useAppSelector} from '../store/hooks';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SocialLogin" component={SocialLogin} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
