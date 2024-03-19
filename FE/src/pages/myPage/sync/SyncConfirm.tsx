import React from 'react';
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
import {Wrapper} from './SyncConfirmStyle';

const SyncConfirm = () => {
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
      <Body></Body>
      <AppButton style={BottomButton} text="다음" />
    </Wrapper>
  );
};

export default SyncConfirm;
