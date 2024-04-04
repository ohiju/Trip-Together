import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import WebSocketContainer from './contexts/WebSocketContext';
import usePermissions from './hooks/usePermissions';
import RootNavigator from './stacks/RootNavigator';

function AppInner() {
  usePermissions();

  return (
    <NavigationContainer>
      <WebSocketContainer>
        <RootNavigator />
      </WebSocketContainer>
    </NavigationContainer>
  );
}

export default AppInner;
