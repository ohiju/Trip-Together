/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import styled from 'styled-components/native';
import AppInner from './AppInner';
import {persistor, store} from './store';

const GestureHandlerRoot = styled(GestureHandlerRootView)`
  flex: 1;
`;

function App(): React.JSX.Element {
  // 스플래시 스크린
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRoot>
          <AppInner />
        </GestureHandlerRoot>
      </PersistGate>
    </Provider>
  );
}

export default App;
