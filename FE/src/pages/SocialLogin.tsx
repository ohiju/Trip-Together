import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import useSocialLogin, {SocialLoginData} from '../apis/bank/useSocialLogin';
import {iconPath} from '../assets/icons/iconPath';
import {imagePath} from '../assets/images/imagePath';
import AppButton from '../components/common/AppButton';
import {socialLoginButton} from '../constants/AppButton';
import {
  Input,
  InputView,
  Logo,
  LogoText,
  LogoView,
  Wrapper,
} from './SocialLoginStyle';

const SocialLogin = () => {
  // 입력
  const [userId, setUserId] = useState('xorb269');
  const [password, setPassword] = useState('1234');
  const handleUserId = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setUserId(e.nativeEvent.text);
  };
  const handlePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setPassword(e.nativeEvent.text);
  };

  // 로그인
  const socialLogin = useSocialLogin();
  const handlePressLogin = () => {
    const data: SocialLoginData = {
      client_id: 'test',
      redirect_url: 'https://j10a309.p.ssafy.io',
      user_id: userId,
      password,
    };
    socialLogin(data);
  };

  return (
    <Wrapper>
      <LogoView>
        <Logo source={imagePath.logobank} resizeMode="contain" />
        <LogoText>FlashBank</LogoText>
      </LogoView>
      <InputView>
        <WithLocalSvg width={24} height={24} asset={iconPath.user} />
        <Input
          value={userId}
          onChange={handleUserId}
          placeholder="아이디를 입력하세요"
        />
      </InputView>
      <InputView>
        <WithLocalSvg width={24} height={24} asset={iconPath.lock} />
        <Input
          value={password}
          onChange={handlePassword}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry={true}
        />
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
