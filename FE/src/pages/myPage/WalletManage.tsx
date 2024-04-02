import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {Alert} from 'react-native';
import {imagePath} from '../../assets/images/imagePath';
import currencies, {currency, kr_currency} from '../../constants/currencies';
import groupByTwo from '../../hooks/groupByTow';
import {ExchangeSelectSyncProps} from '../../interfaces/router/myPage/ExchangeStackParams';
import {MyPageStackParams} from '../../interfaces/router/myPage/MyPageStackParams';
import {tripAccount as tripAccountType} from '../../interfaces/states/AccountState';
import {RootState} from '../../store';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {
  Account,
  AccountRow,
  Accounts,
  Balance,
  BalanceView,
  Btn,
  BtnText,
  BtnView,
  Country,
  CountryView,
  Flag,
  Wrapper,
} from './WalletManageStyle';

const WalletManage = () => {
  // 데이터
  const tripAccounts = useAppSelector(
    (state: RootState) => state.account.trip_accounts,
  );
  const groups = groupByTwo(tripAccounts);
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const handleToRefund = (nation: string) => {
    if (!syncAccounts.length) {
      Alert.alert('연동된 계좌가 없습니다.');
      return;
    }
    const from_currency = currencies.find(
      item => item.nation === nation,
    ) as currency;
    const tripAccount = tripAccounts.find(
      item => item.nation === nation,
    ) as tripAccountType;
    const props: ExchangeSelectSyncProps = {
      from_currency,
      to_currency: kr_currency,
      type: 'refund',
      tripAccount,
    };
    navigation.navigate('ExchangeSelectSync', props);
  };

  return (
    <Wrapper>
      <Accounts>
        {groups.map(group => (
          <AccountRow>
            {group.map(account => (
              <Account key={account.nation}>
                <CountryView>
                  <Flag
                    source={imagePath[`${account.nation.toLowerCase()}round`]}
                    resizeMode="cover"
                  />
                </CountryView>
                <BalanceView>
                  <Country>{account.nation_kr}</Country>
                  <Balance>
                    {String.fromCharCode(account.unit)} {account.balance}
                  </Balance>
                </BalanceView>
                <BtnView>
                  <Btn onPress={() => handleToRefund(account.nation)}>
                    <BtnText>환불</BtnText>
                  </Btn>
                </BtnView>
              </Account>
            ))}
          </AccountRow>
        ))}
      </Accounts>
    </Wrapper>
  );
};

export default WalletManage;
