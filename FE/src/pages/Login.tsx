import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../assets/images/imagePath';
import AppButton from '../components/common/AppButton';
import {RootStackParams} from '../interfaces/router/RootStackParams';
import {Logo, LogoView, Slogan, SloganView, Wrapper} from './LoginStyle';

const Login = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const handlePressSocialLogin = () => {
    navigation.navigate('SocialLogin');
  };

  return (
    <Wrapper>
      <LogoView>
        <Logo source={imagePath.logo} resizeMode="cover" />
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
