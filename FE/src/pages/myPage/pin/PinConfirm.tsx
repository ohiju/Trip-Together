import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import usePostPin, {PostPinData} from '../../../apis/member/usePostPin';
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
import usePinConfirmation from '../../../hooks/usePinConfirm';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {useAppDispatch} from '../../../store/hooks';
import {Input, InputView, MessageView, Wrapper} from './PinRegistStyle';

const PinConfirm = () => {
  const dispatch = useAppDispatch();
  // 유효성 검사
  const [confirm, setConfirm] = useState('');
  const [isOk, setIsOk] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const {pin} = useRoute<RouteProp<MyPageStackParams, 'PinConfirm'>>().params;
  const pinConfirmation = usePinConfirmation();
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    if (value.length === 6) {
      const result = pinConfirmation(pin, value);
      setConfirm(result.validation);
      setIsOk(result.isOk);
      setMessage(result.message);
    } else {
      setConfirm(value);
      setIsOk(false);
      setMessage('');
    }
  };

  // 라우팅
  const postPin = usePostPin();
  const registPin = () => {
    const data: PostPinData = {
      pin_num: pin,
      pin_num_check: confirm,
    };
    postPin(data);
  };
  const handleRegist = () => {
    Alert.alert('핀 번호를 등록하시겠습니까?', '', [
      {
        text: '등록',
        onPress: registPin,
      },
      {
        text: '취소',
      },
    ]);
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>
          핀 번호를 <Hightlight>확인</Hightlight>해주세요.
        </Title>
      </TitleView>
      <Body>
        <InputView>
          <WithLocalSvg width={24} height={24} asset={iconPath.lock} />
          <Input
            id="pin"
            value={confirm}
            onChange={onChange}
            maxLength={6}
            keyboardType="number-pad"
            placeholder="6자리 숫자를 확인해주세요"
            autoComplete="off"
            secureTextEntry={true}
          />
        </InputView>
        {message && (
          <MessageView>
            <ShakeMessage>{message}</ShakeMessage>
          </MessageView>
        )}
      </Body>
      <AppButton
        style={BottomButton}
        text="등록"
        disabled={!isOk}
        onPress={handleRegist}
      />
    </Wrapper>
  );
};

export default PinConfirm;
