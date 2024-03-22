import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {font_danger, font_lightgray} from '../../../constants/colors';
import {SyncStackParams} from '../../../interfaces/router/myPage/SyncStackParams';
import {useAppDispatch} from '../../../store/hooks';
import {pushSyncAccount} from '../../../store/slices/user';
import {
  AgainBtn,
  AgainBtnView,
  AgainText,
  Input,
  InputView,
  Message,
  MessageView,
  Wrapper,
} from './SyncConfirmStyle';

const SyncConfirm = () => {
  const dummySender = '춤추는 고릴라';
  const dispatch = useAppDispatch();

  // 입력 관리
  const [sender, setSendr] = useState('');
  const handleSender = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    setSendr(value);
  };

  // 라우팅
  const route = useRoute<RouteProp<SyncStackParams, 'SyncConfirm'>>();
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();
  const registAccount = (is_main: 0 | 1) => {
    const account = {
      account_uuid: route.params.selected.account_uuid,
      account_num: route.params.selected.account_num,
      name: route.params.selected.name,
      is_main,
    };
    dispatch(pushSyncAccount(account));
    navigation.navigate('SyncComplete');
  };
  const confirmSender = () => {
    // 1원 인증 검증 API
    if (sender === dummySender) {
      let is_main: 0 | 1 = 0;
      Alert.alert('계좌 인증 성공!', '이 계좌를 주 계좌로 등록하시겠습니까?', [
        {
          text: '예',
          onPress: () => {
            is_main = 1;
          },
        },
        {
          text: '아니오',
        },
      ]);
      registAccount(is_main);
    } else {
      Alert.alert('송금자를 다시 확인해주세요');
    }
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>1원</Hightlight>을 송금했어요!
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>계좌 인증을 위해 송금자를 입력하세요</Slogan>
      </SloganView>
      <Body>
        <InputView>
          <WithLocalSvg width={24} height={24} asset={iconPath.coin} />
          <Input
            value={sender}
            onChange={handleSender}
            placeholder="송금자 이름을 입력하세요"
          />
        </InputView>
        <MessageView>
          <WithLocalSvg
            width={16}
            height={16}
            stroke={font_danger}
            asset={iconPath.info}
          />
          <Message>1원 송금은 1일 10회로 제한됩니다.</Message>
        </MessageView>
        <AgainBtnView>
          <AgainBtn>
            <AgainText>혹시 송금이 오지 않았나요?</AgainText>
            <WithLocalSvg
              width={24}
              height={24}
              fill={font_lightgray}
              asset={iconPath.caret}
            />
          </AgainBtn>
        </AgainBtnView>
      </Body>
      <AppButton
        style={BottomButton}
        text="확인"
        disabled={sender.trim() === ''}
        onPress={confirmSender}
      />
    </Wrapper>
  );
};

export default SyncConfirm;
