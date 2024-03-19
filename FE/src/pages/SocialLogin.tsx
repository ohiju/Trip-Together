import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import LockSvg from '../assets/icons/lock.svg';
import UserSvg from '../assets/icons/user.svg';
import {imagePath} from '../assets/images/imagePath';
import AppButton from '../components/common/AppButton';
import {socialLoginButton} from '../constants/AppButton';
import {useAppDispatch} from '../store/hooks';
import {login} from '../store/slices/user';
import {
  Input,
  InputView,
  Logo,
  LogoText,
  LogoView,
  Wrapper,
} from './SocialLoginStyle';

const SocialLogin = () => {
  const dispatch = useAppDispatch();

  const handlePressLogin = () => {
    dispatch(login(true));
  };

  return (
    <Wrapper>
      <LogoView>
        <Logo source={imagePath.bankLogo} resizeMode="contain" />
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
      <AppButton
        style={socialLoginButton}
        text="로그인"
        onPress={handlePressLogin}
      />
    </Wrapper>
  );
};

export default SocialLogin;
