import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import bankAccounts, {bankAccount} from '../../../assets/data/bankAccount';
import CaretSvg from '../../../assets/icons/caret.svg';
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

  // 선택
  const [selected, setSelected] = useState<bankAccount | null>(null);
  const select = (target: bankAccount) => {
    setSelected(target);
    setOpened(false);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();
  const handleToNext = () => {
    navigation.navigate('SyncConfirm');
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
              asset={CaretSvg}
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
