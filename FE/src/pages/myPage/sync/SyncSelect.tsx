import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, ToastAndroid} from 'react-native';
import {bankAccount} from '../../../assets/data/bankAccount';
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
import {syncOptions} from '../../../constants/AppSelectOptions';
import {SyncStackParams} from '../../../interfaces/router/myPage/SyncStackParams';
import {RootState} from '../../../store';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {Wrapper} from './SyncSelectStyle';

const SyncSelect = () => {
  // 데이터
  const [selected, setSelected] = useState<bankAccount | null>(null);

  // 유효성 검사
  const synced = useAppSelector((state: RootState) => state.user.sync_accounts);
  const checkValid = (target: bankAccount) => {
    for (const account of synced) {
      if (account.account_uuid === target.account_uuid) {
        Alert.alert('이미 등록된 계좌입니다.');
        return false;
      }
    }
    return true;
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();
  const oneTransfer = () => {
    if (!selected) return;
    // 1원 전송 api
    navigation.navigate('SyncConfirm', {selected});
    ToastAndroid.show('1원이 송금되었습니다.', ToastAndroid.SHORT);
  };
  const handleToNext = () => {
    if (!selected) {
      Alert.alert('계좌를 선택해주세요.');
      return;
    }
    Alert.alert('해당 계좌로 1원이 송금됩니다', '계속 하시겠습니까?', [
      {
        text: '계속',
        onPress: oneTransfer,
      },
      {
        text: '취소',
      },
    ]);
  };

  // 탭바
  const dispatch = useAppDispatch();
  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

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
