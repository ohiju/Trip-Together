import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import AppButton from '../../../components/common/AppButton';
import {Body} from '../../../components/common/InfoPageStyle';
import Amount from '../../../components/myPage/exchange/Amount';
import {BottomButton} from '../../../constants/AppButton';
import {kr_currency} from '../../../constants/currencies';
import useExchangeData from '../../../hooks/useExchangeData';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {Wrapper} from './ExchangeInputStyle';

const ExchangeInput = () => {
  const {currency, account} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeInput'>>().params;

  // 환율 조회 API
  const rate = currency.nation === 'UK' ? 1703.6 : 1455.62;

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
