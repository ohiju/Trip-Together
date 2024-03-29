import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_danger, bg_danger_lignt} from '../../../constants/colors';
import {syncAccount} from '../../../interfaces/states/UserState';
import {
  BankInfoView,
  BankLogo,
  BtnText,
  BtnView,
  LeftView,
  MainText,
  MainView,
  NumText,
  TitleText,
  TitleView,
  Wrapper,
} from './AccountStyle';

interface AccountProps {
  account: syncAccount;
}

const Account = ({account}: AccountProps) => {
  return (
    <Wrapper>
      <LeftView>
        <BankLogo source={imagePath.banklogo} resizeMode="contain" />
        <BankInfoView>
          <TitleView>
            <TitleText>{account.name}</TitleText>
            {account.is_main ? (
              <MainView>
                <MainText>주계좌</MainText>
              </MainView>
            ) : null}
          </TitleView>
          <NumText>{account.account_num}</NumText>
        </BankInfoView>
      </LeftView>
      <BtnView
        style={({pressed}) => ({
          backgroundColor: pressed ? bg_danger_lignt : bg_danger,
        })}>
        <BtnText>해지</BtnText>
      </BtnView>
    </Wrapper>
  );
};

export default Account;
