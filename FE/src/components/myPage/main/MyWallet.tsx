import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {myWalletButton} from '../../../constants/AppButton';
import {font_lightgray} from '../../../constants/colors';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import ButtonMiddle from '../../common/AppButton';
import MyAccounts from './MyAccounts';
import {
  Body,
  Header,
  History,
  HistoryView,
  Title,
  TitleView,
  Wrapper,
} from './MyWalletStyle';
import NoAccount from './NoAccount';

const MyWallet = () => {
  const tripAccountsLength = useAppSelector(
    (state: RootState) => state.user.userInfo.trip_accounts_length,
  );
  const syncAccountsLength = useAppSelector(
    (state: RootState) => state.user.userInfo.sync_accounts_length,
  );

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const checkBankAccount = () => {
    if (syncAccountsLength) {
      return true;
    } else return false;
  };
  const handleToExchange = () => {
    if (checkBankAccount()) {
      navigation.navigate('ExchangeSearch');
    } else {
      navigation.navigate('SyncMain');
    }
  };
  const handleToHistory = () => {
    if (checkBankAccount()) {
    } else {
      navigation.navigate('SyncMain');
    }
  };

  return (
    <Wrapper>
      <Header>
        <TitleView>
          <Title>내 지갑</Title>
          <WithLocalSvg width={24} height={24} asset={iconPath.info} />
        </TitleView>
        <HistoryView onPress={handleToHistory}>
          <History>이용 내역</History>
          <WithLocalSvg
            width={22}
            height={22}
            fill={font_lightgray}
            asset={iconPath.caret}
          />
        </HistoryView>
      </Header>
      <Body>{tripAccountsLength > 0 ? <MyAccounts /> : <NoAccount />}</Body>
      <ButtonMiddle
        style={myWalletButton}
        text="환전하기"
        onPress={handleToExchange}
      />
    </Wrapper>
  );
};

export default MyWallet;
