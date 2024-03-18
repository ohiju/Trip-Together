import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Hightlight,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import SyncFeature from '../../../components/myPage/sync/SyncFeature';
import {BottomButton} from '../../../constants/AppButton';
import {syncFeatures} from '../../../constants/SyncFeatures';
import {SyncStackParams} from '../../../interfaces/router/myPage/SyncStackParams';
import {useAppDispatch} from '../../../store/hooks';
import {setDisplay} from '../../../store/slices/tabState';
import {Wrapper} from './SyncMainStyle';

const SyncMain = () => {
  // 라우팅
  const navigation = useNavigation<NavigationProp<SyncStackParams>>();
  const handleToNext = () => {
    navigation.navigate('SyncSelect');
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
          연동된 <Hightlight>계좌</Hightlight>가 없어요!
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>계좌를 연동하고 Trip Together만의 놀라운</Slogan>
        <Slogan>기능들을 경험하세요</Slogan>
      </SloganView>
      <Body>
        {syncFeatures.map((feature, idx) => (
          <SyncFeature
            key={idx}
            image={feature.image}
            title={feature.title}
            features={feature.features}
          />
        ))}
      </Body>
      <AppButton style={BottomButton} text="계속하기" onPress={handleToNext} />
    </Wrapper>
  );
};

export default SyncMain;
