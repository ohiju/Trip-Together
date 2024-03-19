import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import PlusRoundSvg from '../../../assets/icons/plus_round.svg';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {
  AddWallet,
  AddWalletView,
  Placeholder,
  PlaceholderView,
  Wrapper,
} from './NoWalletStyle';

const NoWallet = () => {
  // 라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const onPress = () => {
    navigation.navigate('PinMain');
  };

  return (
    <Wrapper onPress={onPress}>
      <AddWalletView>
        <WithLocalSvg width={20} height={20} asset={PlusRoundSvg} />
        <AddWallet>지갑 생성하기</AddWallet>
      </AddWalletView>
      <PlaceholderView>
        <Placeholder>지갑을 생성하고 계좌를 연동해보세요!</Placeholder>
      </PlaceholderView>
    </Wrapper>
  );
};

export default NoWallet;
