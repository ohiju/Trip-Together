/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppWrapper} from './AppStyle';
import SocialLogin from './pages/SocialLogin';

function App(): React.JSX.Element {
  // 스플래시 스크린
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <AppWrapper>
      <SocialLogin />
    </AppWrapper>
  );
}

export default App;
