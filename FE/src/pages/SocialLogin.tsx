import React from 'react';
import ButtonMiddle from '../components/common/ButtonMiddle';
import {Input, InputView, Logo, LogoView, Wrapper} from './SocialLoginStyle';

const SocialLogin = () => {
  const handlePressLogin = () => {};

  return (
    <Wrapper>
      <LogoView>
        <Logo source={require('../assets/images/bank_logo.png')} />
      </LogoView>
      <InputView>
        <Input />
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
