import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import ShakeMessage from '../../../components/common/ShakeMessage';
import {BottomButton} from '../../../constants/AppButton';
import usePinValidation from '../../../hooks/usePinValidation';
import {PinStackParams} from '../../../interfaces/router/myPage/PinStackParams';
import {Input, InputView, MessageView, Wrapper} from './PinRegistStyle';

const PinRegist = () => {
  // 핀 입력 및 유효성 검사
  const [pin, setPin] = useState('');
  const [isOk, setIsOk] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const pinValidation = usePinValidation();
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    if (value.length === 6) {
      const result = pinValidation(value);
      setPin(result.pin);
      setIsOk(result.isOk);
      setMessage(result.message);
    } else {
      setPin(value);
      setIsOk(false);
      setMessage('');
    }
  };

  // 다음 페이지로 이동
  const navigation = useNavigation<NavigationProp<PinStackParams>>();
  const handleToNext = () => {
    navigation.navigate('PinConfirm', {pin});
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>
          핀 번호를 <Hightlight>입력</Hightlight>해주세요.
        </Title>
      </TitleView>
      <Body>
        <InputView>
          <WithLocalSvg width={24} height={24} asset={iconPath.lock} />
          <Input
            id="pin"
            value={pin}
            onChange={onChange}
            maxLength={6}
            keyboardType="number-pad"
            placeholder="6자리 숫자를 입력하세요"
            autoComplete="off"
            secureTextEntry={true}
          />
        </InputView>
        {message ? (
          <MessageView>
            <ShakeMessage>{message}</ShakeMessage>
          </MessageView>
        ) : null}
      </Body>
      <AppButton
        style={BottomButton}
        text="다음"
        disabled={!isOk}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default PinRegist;
