import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import LockSvg from '../assets/icons/lock.svg';
import UserSvg from '../assets/icons/user.svg';
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
        <WithLocalSvg width={24} height={24} asset={UserSvg} />
        <Input placeholder="아이디를 입력하세요" />
      </InputView>
      <InputView>
        <WithLocalSvg width={24} height={24} asset={LockSvg} />
        <Input placeholder="비밀번호를 입력하세요" />
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
