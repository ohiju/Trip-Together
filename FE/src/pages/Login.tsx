import React from 'react';
import ButtonMiddle from '../components/common/ButtonMiddle';
import {font_light, primary, primary_light} from '../constants/colors';
import {Logo, LogoView, Slogan, SloganView, Wrapper} from './LoginStyle';

const Login = ({navigation}) => {
  const handlePressSocialLogin = () => {
    navigation.navigate('SocialLogin');
  };

  return (
    <Wrapper>
      <LogoView>
        <Logo
          source={require('../assets/images/logo.png')}
          resizeMode="contain"
        />
      </LogoView>
      <SloganView>
        <Slogan>하나의 은행 계정으로</Slogan>
        <Slogan>모든 서비스를 경험하세요</Slogan>
      </SloganView>
      <ButtonMiddle
        bg1={primary}
        bg2={primary_light}
        color={font_light}
        onPress={handlePressSocialLogin}
      />
    </Wrapper>
  );
};

export default Login;
