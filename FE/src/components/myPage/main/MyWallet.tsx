import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import CaretSvg from '../../../assets/icons/caret.svg';
import InfoSvg from '../../../assets/icons/info.svg';
import {myWalletButton} from '../../../constants/AppButton';
import {font_lightgray} from '../../../constants/colors';
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
    (state: RootState) => state.user.accounts.trip_accounts_length,
  );

  return (
    <Wrapper>
      <Header>
        <TitleView>
          <Title>내 지갑</Title>
          <WithLocalSvg width={28} height={28} asset={InfoSvg} />
        </TitleView>
        <HistoryView>
          <History>이용 내역</History>
          <WithLocalSvg
            width={24}
            height={24}
            fill={font_lightgray}
            asset={CaretSvg}
          />
        </HistoryView>
      </Header>
      <Body>{tripAccountsLength > 0 ? <MyAccounts /> : <NoAccount />}</Body>
      <ButtonMiddle style={myWalletButton} text="환전하기" />
    </Wrapper>
  );
};

export default MyWallet;
