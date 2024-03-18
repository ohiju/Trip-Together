import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import LockSvg from '../../../assets/icons/lock.svg';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {MyPageStackParams} from '../../../interfaces/router/MyPageStackParams';
import {PinConfirmParams} from '../../../interfaces/router/PinStackParams';
import {Input, InputView, Wrapper} from './PinRegistStyle';

const PinConfirm = ({pin}: PinConfirmParams) => {
  const [confirm, setConfirm] = useState('');
  const [isOk, setIsOk] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    if (isNaN(parseInt(value, 10)) && value.length) {
      setConfirm('');
      Alert.alert('입력이 잘못되었습니다.');
      return;
    }
    value.length === 6 ? setIsOk(true) : setIsOk(false);
    setConfirm(value);
  };

  const handleToNext = () => {
    Alert.alert('핀을 등록하시겠습니까?', '', [
      {
        text: '등록',
        onPress: () => navigation.navigate('MyMain'),
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
          <WithLocalSvg width={24} height={24} asset={LockSvg} />
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

export default PinConfirm;
