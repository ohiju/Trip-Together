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
  const tripAccounts = useAppSelector(
    (state: RootState) => state.user.trip_accounts,
  );
  const syncs = useAppSelector((state: RootState) => state.user.sync_accounts);

  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const checkSyncs = () => {
    if (syncs?.length) {
      return true;
    }
    return false;
  };
  const handleToExchange = () => {
    if (checkSyncs()) {
      navigation.navigate('ExchangeSearch');
    } else {
      navigation.navigate('SyncMain');
    }
  };
  const handleToHistory = () => {
    if (checkSyncs()) {
      navigation.navigate('CardHistory');
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
      <Body>{tripAccounts?.length > 0 ? <MyAccounts /> : <NoAccount />}</Body>
      <ButtonMiddle
        style={myWalletButton}
        text="환전하기"
        onPress={handleToExchange}
      />
    </Wrapper>
  );
};

export default MyWallet;
