import React from 'react';
import {imagePath} from '../assets/images/imagePath';
import AppButton from '../components/common/AppButton';
import {LoginProps} from '../interfaces/props/LoginProps';
import {Logo, LogoView, Slogan, SloganView, Wrapper} from './LoginStyle';

const Login = ({navigation}: LoginProps) => {
  const handlePressSocialLogin = () => {
    navigation.navigate('SocialLogin');
  };

  return (
    <Wrapper>
      <LogoView>
        <Logo source={imagePath.logo} resizeMode="contain" />
      </LogoView>
      <SloganView>
        <Slogan>하나의 은행 계정으로</Slogan>
        <Slogan>모든 서비스를 경험하세요</Slogan>
      </SloganView>
      <AppButton
        text="반짝 은행으로 계속하기"
        onPress={handlePressSocialLogin}
      />
    </Wrapper>
  );
};

export default Login;
