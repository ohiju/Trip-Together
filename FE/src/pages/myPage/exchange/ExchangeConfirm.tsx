import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import AppButton from '../../../components/common/AppButton';
import Deposit from '../../../components/myPage/exchange/Deposit';
import Term from '../../../components/myPage/exchange/Term';
import Withdraw from '../../../components/myPage/exchange/Withdraw';
import {BottomButton} from '../../../constants/AppButton';
import {infoCollect, term} from '../../../constants/terms';
import {ExchangeStackParams} from '../../../interfaces/router/myPage/ExchangeStackParams';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {Terms, Wrapper} from './ExchangeConfirmStyle';

const ExchangeConfirm = () => {
  // 데이터
  const {currency, account, ammount, rate} =
    useRoute<RouteProp<ExchangeStackParams, 'ExchangeConfirm'>>().params;

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const handleExchange = () => {
    // 충전 API
    navigation.navigate('MyMain');
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
        onPress={handleExchange}
      />
    </Wrapper>
  );
};

export default ExchangeConfirm;
