import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {PostExchangeData} from '../../../apis/account/usePostExchange';
import AppButton from '../../../components/common/AppButton';
import Deposit from '../../../components/myPage/exchange/Deposit';
import Term from '../../../components/myPage/exchange/Term';
import Withdraw from '../../../components/myPage/exchange/Withdraw';
import {BottomButton} from '../../../constants/AppButton';
import {infoCollect, term} from '../../../constants/terms';
import parseExchange from '../../../hooks/parseExchange';
import {
  PinAuthProps,
  RootStackParams,
} from '../../../interfaces/router/RootStackParams';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {Terms, Wrapper} from './ExchangeConfirmStyle';

const ExchangeConfirm = () => {
  // 데이터
  const {from_currency, to_currency, account, ammount, rate, type} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeConfirm'>>().params;
  const {rateText, ammountText} = parseExchange({
    from_currency,
    to_currency,
    ammount,
    rate,
    type,
  });

  // 라우팅
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const pressExchange = () => {
    const quantity = parseInt(ammount, 10);
    const pinData: PostExchangeData = {
      pin_num: '',
      account_uuid: account.account_uuid,
      to_currency_code: to_currency.currency_code,
      from_currency_code: from_currency.currency_code,
      to_quantity: type === 'exchange' ? quantity : quantity * rate,
      from_quantity: type === 'exchange' ? quantity * rate : quantity,
    };
    console.log(pinData);

    const props: PinAuthProps = {
      pinData,
      api: 'postExchange',
    };
    navigation.navigate('PinAuth', props);
  };

  // 체크박스
  const [term1, setTerm1] = useState<term>(infoCollect);

  return (
    <Wrapper>
      <Deposit rateText={rateText} ammountText={ammountText} />
      <Withdraw
        account={account}
        ammount={ammount}
        currency={type === 'exchange' ? to_currency : from_currency}
        rate={rate}
        type={type}
      />
      <Terms>
        <Term check={term1} setCheck={setTerm1} />
      </Terms>
      <AppButton
        style={BottomButton}
        text="충전하기"
        disabled={!term1.isChecked}
        onPress={pressExchange}
      />
    </Wrapper>
  );
};

export default ExchangeConfirm;
