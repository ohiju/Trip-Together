import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import useOneVerify, {OneVerifyData} from '../../../apis/account/useOneVerify';
import {PostSyncAccountData} from '../../../apis/account/usePostSyncAccount';
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
  const oneVerify = useOneVerify();

  // 입력 관리
  const [code, setCode] = useState('');
  const handleSender = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setCode(e.nativeEvent.text);
  };

  // API
  const {selected} =
    useRoute<RouteProp<SyncStackParams, 'SyncConfirm'>>().params;
  const pressConfirm = () => {
    const data: OneVerifyData = {
      account_uuid: selected.account_uuid,
      code,
    };
    const pinData: PostSyncAccountData = {
      pin_num: '',
      is_main: 0,
      account_uuid: selected.account_uuid,
    };
    oneVerify(data, pinData);
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
            value={code}
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
        disabled={code.trim() === ''}
        onPress={pressConfirm}
      />
    </Wrapper>
  );
};

export default SyncConfirm;
