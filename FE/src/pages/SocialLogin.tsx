import React from 'react';
import {Input, InputView, Logo, LogoView, Wrapper} from './SocialLoginStyle';

const SocialLogin = () => {
  return (
    <Wrapper>
      <LogoView>
        <Logo source={require('../assets/images/bank_logo.png')} />
      </LogoView>
      <InputView>
        <Input />
      </InputView>
    </Wrapper>
  );
};

export default SocialLogin;
