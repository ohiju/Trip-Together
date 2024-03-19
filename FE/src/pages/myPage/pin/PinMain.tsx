import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
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
import {PinStackParams} from '../../../interfaces/router/myPage/PinStackParams';
import {useAppDispatch} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {IconView, Term, TermView, Wrapper} from './PinMainStyle';

const PinMain = () => {
  // 이용 약관 체크
  const [isChecked, setIsChecked] = useState(false);
  const handleTermCheck = () => {
    setIsChecked(!isChecked);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<PinStackParams>>();
  const handleToNext = () => {
    navigation.navigate('PinRegist');
  };

  // 탭바 숨기기
  const dispatch = useAppDispatch();
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
          <WithLocalSvg width={180} height={180} asset={iconPath.shield} />
        </IconView>
        <TermView>
          <AppCheckbox isChecked={isChecked} onPress={handleTermCheck} />
          <Term>핀 등록 및 사용에 관한 약관</Term>
          <WithLocalSvg width={25} height={25} asset={iconPath.caret} />
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

export default PinMain;
