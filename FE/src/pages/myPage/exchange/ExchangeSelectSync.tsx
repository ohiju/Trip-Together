import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import useGetBankAccounts from '../../../apis/account/useGetBankAccounts';
import AppButton from '../../../components/common/AppButton';
import AppSelect from '../../../components/common/AppSelect';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {useExchangeOptions} from '../../../constants/AppSelectOptions';
import {bankAccount} from '../../../interfaces/bankAccount';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {Wrapper} from './ExchangeSelectSyncStyle';

const ExchangeSelectSync = () => {
  const getBankAccounts = useGetBankAccounts();
  const exchangeOptions = useExchangeOptions();
  const [account, setAccount] = useState<bankAccount | null>(null);

  // 라우팅
  const navigation = useNavigation<NavigationProp<ExchangeStackParams>>();
  const {currency} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeSelectSync'>>().params;
  const handleToNext = () => {
    if (!account) {
      Alert.alert('계좌를 선택해주세요.');
      return;
    }
    navigation.navigate('ExchangeInput', {account, currency});
  };

  useFocusEffect(() => {
    getBankAccounts();
  });

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>계좌</Hightlight>를 선택해 주세요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>연동한 계좌 목록에서 출금할 계좌를 선택해주세요</Slogan>
      </SloganView>
      <Body>
        <AppSelect
          setData={setAccount}
          placeholder="계좌 선택"
          options={exchangeOptions}
        />
      </Body>
      <AppButton
        style={BottomButton}
        text="다음"
        disabled={account === null}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default ExchangeSelectSync;
