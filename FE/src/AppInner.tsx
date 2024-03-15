import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {MainStackParams} from './interfaces/router/MainStackParams';
import Login from './pages/Login';
import SocialLogin from './pages/SocialLogin';
import TabNavigator from './stacks/TabNavigator';
import {RootState} from './store';
import {useAppSelector} from './store/hooks';

function AppInner() {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.user.isLoggedIn,
  );

  const Stack = createNativeStackNavigator<MainStackParams>();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="tabNavigator" component={TabNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SocialLogin" component={SocialLogin} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;
