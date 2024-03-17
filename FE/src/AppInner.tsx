import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootNavigator from './stacks/RootNavigator';

function AppInner() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default AppInner;
