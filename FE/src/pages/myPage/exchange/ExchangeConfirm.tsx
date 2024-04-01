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
import {kr_currency} from '../../../constants/currencies';
import {infoCollect, term} from '../../../constants/terms';
import {
  PinAuthProps,
  RootStackParams,
} from '../../../interfaces/router/RootStackParams';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {Terms, Wrapper} from './ExchangeConfirmStyle';

const ExchangeConfirm = () => {
  // 데이터
  const {currency, account, ammount, rate} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeConfirm'>>().params;

  // 라우팅
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const pressExchange = () => {
    const pinData: PostExchangeData = {
      pin_num: '',
      account_uuid: account.account_uuid,
      to_currency_code: currency.currency_code,
      from_currency_code: kr_currency.currency_code,
      to_quantity: parseInt(ammount, 10),
      from_quantity: parseInt(ammount, 10) * rate,
    };
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
      <Deposit ammount={ammount} currency={currency} />
      <Withdraw
        account={account}
        ammount={ammount}
        currency={currency}
        rate={rate}
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
