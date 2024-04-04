import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {menu as menuType} from '../../../constants/MyPageMenus';
import {dark} from '../../../constants/colors';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {CaretView, Title, TitleView, Wrapper} from './MenuStyle';

interface MenuProps {
  menu: menuType;
}

const Menu = ({menu}: MenuProps) => {
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const user = useAppSelector((state: RootState) => state.user.user);
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );
  const tripAccounts = useAppSelector(
    (state: RootState) => state.account.trip_accounts,
  );
  const handleNavigate = () => {
    if (!user.is_pin) {
      navigation.navigate('PinMain');
    } else if (menu.navigation !== 'pinManage' && !syncAccounts.length) {
      navigation.navigate('SyncMain');
    } else if (menu.navigation === 'WalletManage' && !tripAccounts.length) {
      navigation.navigate('ExchangeSearch');
    } else {
      navigation.navigate(menu.navigation, menu.props);
    }
  };

  return (
    <Wrapper onPress={handleNavigate}>
      <TitleView>
        {menu.icon}
        <Title>{menu.text}</Title>
      </TitleView>
      <CaretView>
        <WithLocalSvg
          width={20}
          height={20}
          fill={dark}
          asset={iconPath.caret}
        />
      </CaretView>
    </Wrapper>
  );
};

export default Menu;
