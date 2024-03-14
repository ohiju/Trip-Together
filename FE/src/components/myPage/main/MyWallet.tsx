import React from 'react';
import {View} from 'react-native';
import ButtonMiddle from '../../common/AppButton';
import {
  Body,
  Header,
  History,
  HistoryView,
  Title,
  TitleView,
  Wrapper,
} from './MyWalletStyle';

const MyWallet = () => {
  const accountsLength = 0;

  return (
    <Wrapper>
      <Header>
        <TitleView>
          <Title>내 지갑</Title>
        </TitleView>
        <HistoryView>
          <History>이용 내역</History>
        </HistoryView>
      </Header>
      <Body>{accountsLength > 0 ? <View></View> : <View></View>}</Body>
      <ButtonMiddle />
    </Wrapper>
  );
};

export default MyWallet;
