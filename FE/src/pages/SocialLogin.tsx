import React from 'react';
import {Text} from 'react-native';
import ButtonMiddle from '../components/common/ButtonMiddle';
import {
  Input,
  InputView,
  Logo,
  LogoText,
  LogoView,
  Wrapper,
} from './SocialLoginStyle';

const SocialLogin = () => {
  const handlePressLogin = () => {};

  return (
    <Wrapper>
      <LogoView>
        <Logo
          source={require('../assets/images/bank_logo.png')}
          resizeMode="contain"
        />
        <LogoText>FlashBank</LogoText>
      </LogoView>
      <InputView>
        <Text>😀</Text>
        <Input placeholder="아이디" />
      </InputView>
      <InputView>
        <Input />
      </InputView>
      <ButtonMiddle
        bg1="red"
        bg2="black"
        color="white"
        text="로그인"
        onPress={handlePressLogin}
      />
    </Wrapper>
  );
};

export default SocialLogin;
