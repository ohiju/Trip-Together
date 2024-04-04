import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {DeleteSyncAccountData} from '../../../apis/account/useDeleteSyncAccount';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_danger, bg_danger_lignt} from '../../../constants/colors';
import {
  PinAuthProps,
  RootStackParams,
} from '../../../interfaces/router/RootStackParams';
import {syncAccount} from '../../../interfaces/states/AccountState';
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
  // 라우팅
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const handleToPinAuth = () => {
    const pinData: DeleteSyncAccountData = {
      pin_num: '',
      account_uuid: account.account_uuid,
    };
    const props: PinAuthProps = {
      pinData,
      api: 'deleteSyncAccount',
    };
    navigation.navigate('PinAuth', props);
  };

  return (
    <Wrapper>
      <LeftView>
        <BankLogo source={imagePath.logobank} resizeMode="cover" />
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
        onPress={handleToPinAuth}
        style={({pressed}) => ({
          backgroundColor: pressed ? bg_danger_lignt : bg_danger,
        })}>
        <BtnText>해지</BtnText>
      </BtnView>
    </Wrapper>
  );
};

export default Account;
