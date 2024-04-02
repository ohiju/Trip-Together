import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import useGetBankAccounts from '../../../apis/account/useGetBankAccounts';
import useOneTransfer, {
  OneTransferData,
} from '../../../apis/account/useOneTransfer';
import AppButton from '../../../components/common/AppButton';
import AppSelect from '../../../components/common/AppSelect';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {useSyncOptions} from '../../../constants/AppSelectOptions';
import {bankAccount} from '../../../interfaces/bankAccount';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './SyncSelectStyle';

const SyncSelect = () => {
  const syncOptions = useSyncOptions();

  // 데이터
  const [selected, setSelected] = useState<bankAccount | null>(null);

  // 유효성
  const syncAccounts = useAppSelector(
    (state: RootState) => state.account.sync_accounts,
  );
  const checkValid = (target: bankAccount) => {
    for (const account of syncAccounts) {
      if (account.account_uuid === target.account_uuid) {
        Alert.alert('이미 등록된 계좌입니다.');
        return false;
      }
    }
    return true;
  };

  // 라우팅
  const oneTransfer = useOneTransfer();
  const pressContinue = () => {
    if (!selected) {
      Alert.alert('계좌를 선택해주세요.');
      return;
    }
    const data: OneTransferData = {
      account_uuid: selected.account_uuid,
    };
    oneTransfer(data, selected);
  };
  const handleToNext = () => {
    if (!selected) {
      Alert.alert('계좌를 선택해주세요.');
      return;
    }
    Alert.alert('해당 계좌로 1원이 송금됩니다', '계속 하시겠습니까?', [
      {
        text: '계속',
        onPress: pressContinue,
      },
      {
        text: '취소',
      },
    ]);
  };

  // API
  const getBankAccounts = useGetBankAccounts();
  useEffect(() => {
    getBankAccounts();
  }, []);

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
        <AppSelect
          setData={setSelected}
          placeholder="계좌 선택"
          options={syncOptions}
          checkValid={checkValid}
        />
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
