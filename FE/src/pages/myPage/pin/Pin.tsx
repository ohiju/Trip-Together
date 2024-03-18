import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import CaretSvg from '../../../assets/icons/caret.svg';
import ShieldSvg from '../../../assets/icons/shield.svg';
import AppButton from '../../../components/common/AppButton';
import AppCheckbox from '../../../components/common/AppCheckbox';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import {BottomButton} from '../../../constants/AppButton';
import {PinStackParams} from '../../../interfaces/router/PinStackParams';
import {useAppDispatch} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {IconView, Term, TermView, Wrapper} from './PinStyle';

const Pin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<PinStackParams>>();

  const handleTermCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleToNext = () => {
    navigation.navigate('PinRegist');
  };

  useFocusEffect(() => {
    dispatch(setDisplay(false));
  });

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>핀 번호</Hightlight>를 등록해주세요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>핀 번호를 등록하고 Trip Together의</Slogan>
        <Slogan>모든 은행 기능을 사용해보세요!</Slogan>
      </SloganView>
      <Body>
        <IconView>
          <WithLocalSvg width={180} height={180} asset={ShieldSvg} />
        </IconView>
        <TermView>
          <AppCheckbox isChecked={isChecked} onPress={handleTermCheck} />
          <Term>핀을 통한 은행 접근 권한 동의</Term>
          <WithLocalSvg width={25} height={25} asset={CaretSvg} />
        </TermView>
      </Body>
      <AppButton
        style={BottomButton}
        text="계속"
        disabled={!isChecked}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default Pin;
