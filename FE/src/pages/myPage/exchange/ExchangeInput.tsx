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
import {kr_currency} from '../../../constants/currencies';
import useExchangeData from '../../../hooks/useExchangeData';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './ExchangeInputStyle';

const ExchangeInput = () => {
  const {currency, account} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeInput'>>().params;

  // 환율 조회 API
  const getRate = useGetRate();
  const rate = useAppSelector((state: RootState) => state.account.rate);

  // 데이터
  const exchangeData = useExchangeData();
  const {from, to} = exchangeData(currency, kr_currency, account, rate);

  // 입력
  const [ammount, setAmmount] = useState('');
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setAmmount(e.nativeEvent.text);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<ExchangeStackParams>>();
  const handleToNext = () => {
    navigation.navigate('ExchangeConfirm', {account, currency, ammount, rate});
  };

  useEffect(() => {
    const params: GetRateParams = {
      currency_code: currency.currency_code,
    };
    getRate(params);
  }, []);

  return (
    <Wrapper>
      <Body>
        <Amount data={from} ammount={ammount} onChange={onChange} />
        <Amount data={to} ammount={ammount} rate={rate} />
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
