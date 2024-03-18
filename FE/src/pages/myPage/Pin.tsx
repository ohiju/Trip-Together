import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import CaretSvg from '../../assets/icons/caret.svg';
import ShieldSvg from '../../assets/icons/shield.svg';
import AppButton from '../../components/common/AppButton';
import AppCheckbox from '../../components/common/AppCheckbox';
import {BottomButton} from '../../constants/AppButton';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {
  IconView,
  Slogan,
  SloganView,
  Term,
  TermView,
  Title,
  TitleView,
  Wrapper,
} from './PinStyle';

const Pin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();

  const onPress = () => {
    setIsChecked(!isChecked);
  };

  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  return (
    <Wrapper>
      <TitleView>
        <Title>핀 번호를 등록해주세요</Title>
      </TitleView>
      <SloganView>
        <Slogan>Trip Together의 은행 기능을 사용하기 위해서</Slogan>
        <Slogan>핀 번호 등록이 필요합니다!</Slogan>
      </SloganView>
      <IconView>
        <WithLocalSvg width={180} height={180} asset={ShieldSvg} />
      </IconView>
      <TermView>
        <AppCheckbox isChecked={isChecked} onPress={onPress} />
        <Term>핀을 통한 은행 접근 권한 동의</Term>
        <WithLocalSvg width={20} height={20} asset={CaretSvg} />
      </TermView>
      <AppButton style={BottomButton} text="다음" />
    </Wrapper>
  );
};

export default Pin;
