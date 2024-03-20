import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import bankAccounts, {bankAccount} from '../../../assets/data/bankAccount';
import {iconPath} from '../../../assets/icons/iconPath';
import {imagePath} from '../../../assets/images/imagePath';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {SyncStackParams} from '../../../interfaces/router/myPage/SyncStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Balance,
  BalanceView,
  BankLogo,
  Option,
  OptionBox,
  OptionView,
  Options,
  Select,
  SelectBox,
  SelectView,
  Wrapper,
} from './SyncSelectStyle';

const SyncSelect = () => {
  // 잔액 파싱
  const localing = (num: number) => {
    return num.toLocaleString('ko-KR');
  };

  // 드롭다운
  const [opened, setOpened] = useState<boolean>(false);
  const openOptions = () => {
    setOpened(true);
  };
  const closeOptions = () => {
    setOpened(false);
  };

  // 선택, 중복 체크
  const synced = useAppSelector(
    (state: RootState) => state.user.userInfo.sync_accounts,
  );
  const [selected, setSelected] = useState<bankAccount | null>(null);
  const select = (target: bankAccount) => {
    for (const account of synced) {
      if (account.uuid === target.account_uuid) {
        Alert.alert('이미 등록된 계좌입니다.');
        return;
      }
    }
    setSelected(target);
    setOpened(false);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();
  const handleToNext = () => {
    if (!selected) {
      Alert.alert('계좌를 선택해주세요.');
      return;
    }
    Alert.alert('해당 계좌로 1원이 송금됩니다', '계속 하시겠습니까?', [
      {
        text: '계속',
        onPress: () => {
          // 1원 인증 전송 API
          navigation.navigate('SyncConfirm', {selected});
          ToastAndroid.show('1원이 송금되었습니다.', ToastAndroid.SHORT);
        },
      },
      {
        text: '취소',
      },
    ]);
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>계좌</Hightlight>를 선택해주세요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>Trip Together에서 사용할 반짝은행 계좌를</Slogan>
        <Slogan>선택해주세요.</Slogan>
      </SloganView>
      <Body>
        <SelectBox>
          <SelectView onPress={opened ? closeOptions : openOptions}>
            {selected ? (
              <OptionView>
                <BankLogo source={imagePath.bankLogo} resizeMode="contain" />
                <Option>{selected.account_num}</Option>
              </OptionView>
            ) : (
              <Select>계좌 선택</Select>
            )}
            <WithLocalSvg
              width={25}
              height={25}
              rotation={opened ? 270 : 90}
              asset={iconPath.caret}
            />
          </SelectView>
          {opened ? (
            <Options>
              {bankAccounts.map(account => (
                <OptionBox
                  key={account.account_uuid}
                  onPress={() => select(account)}>
                  <OptionView>
                    <BankLogo
                      source={imagePath.bankLogo}
                      resizeMode="contain"
                    />
                    <Option>{account.account_num}</Option>
                  </OptionView>
                  <BalanceView>
                    <Balance>잔액 {localing(account.balance)} 원</Balance>
                  </BalanceView>
                </OptionBox>
              ))}
            </Options>
          ) : null}
        </SelectBox>
      </Body>
      <AppButton
        style={BottomButton}
        text="다음"
        disabled={selected === null}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default SyncSelect;
