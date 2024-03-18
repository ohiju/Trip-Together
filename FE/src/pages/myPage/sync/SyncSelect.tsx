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
import {Wrapper} from './SyncSelectStyle';

const SyncSelect = () => {
  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>계좌</Hightlight>를 선택해주세요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>Trip Together에서 사용할 반짝은행 계좌를</Slogan>
        <Slogan>선택해주세요.</Slogan>
      </SloganView>
      <Body></Body>
      <AppButton style={BottomButton} text="다음" />
    </Wrapper>
  );
};

export default SyncSelect;
