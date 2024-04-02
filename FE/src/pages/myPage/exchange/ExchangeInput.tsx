import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import useGetRate, {GetRateParams} from '../../../apis/account/useGetRate';
import AppButton from '../../../components/common/AppButton';
import {Body} from '../../../components/common/InfoPageStyle';
import Amount from '../../../components/myPage/exchange/Amount';
import {BottomButton} from '../../../constants/AppButton';
import useExchangeData from '../../../hooks/useExchangeData';
import {
  ExchangeConfirmProps,
  ExchangeStackParams,
} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ExchangeInputStyle';

const ExchangeInput = () => {
  const {from_currency, to_currency, account, type, tripAccount} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeInput'>>().params;

  // 환율 조회 API
  const rate = useAppSelector((state: RootState) => state.account.rate);
  const getRate = useGetRate();
  useEffect(() => {
    const params: GetRateParams = {
      currency_code:
        type === 'exchange'
          ? to_currency.currency_code
          : from_currency.currency_code,
    };
    getRate(params);
  }, []);

  // 데이터
  const exchangeData = useExchangeData();
  const {from, to} = exchangeData(
    from_currency,
    to_currency,
    account,
    rate,
    type,
    tripAccount,
  );

  // 입력
  const [ammount, setAmmount] = useState('');
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setAmmount(e.nativeEvent.text);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<ExchangeStackParams>>();
  const handleToNext = () => {
    const props: ExchangeConfirmProps = {
      from_currency,
      to_currency,
      account,
      ammount,
      rate,
      type,
    };
    navigation.navigate('ExchangeConfirm', props);
  };

  return (
    <Wrapper>
      <Body>
        <Amount data={to} ammount={ammount} onChange={onChange} />
        <Amount data={from} ammount={ammount} rate={rate} />
      </Body>
      <AppButton
        style={BottomButton}
        text="다음"
        onPress={handleToNext}
        disabled={ammount === ''}
      />
    </Wrapper>
  );
};

export default ExchangeInput;
