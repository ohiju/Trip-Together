/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyledView} from './AppStyle';
import {Provider} from 'react-redux';
import store from './store';
import AppInner from './AppInner';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <StyledView>
        <AppInner />
      </StyledView>
    </Provider>
  );
}

export default App;
