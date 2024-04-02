import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {BackHandler} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
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
import {font_lightgray} from '../../../constants/colors';
import {MyPageStackParams} from '../../../interfaces/router/myPage/MyPageStackParams';
import {
  Icon,
  IconView,
  Info,
  InfoBox,
  InfoTitle,
  InfoTitleView,
  InfoView,
  Wrapper,
} from './SyncCompleteStyle';

const SyncComplete = () => {
  //라우팅
  const navigation = useNavigation<NavigationProp<MyPageStackParams>>();
  const handleToMain = () => {
    navigation.navigate('MyMain');
  };

  // 뒤로가기 차단
  useFocusEffect(() => {
    const backAction = () => {
      navigation.navigate('MyPage');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });

  return (
    <Wrapper>
      <TitleView>
        <Title>
          <Hightlight>계좌 연동</Hightlight>을 완료했어요
        </Title>
      </TitleView>
      <SloganView>
        <Slogan>이제부터 Trip Together의 모든</Slogan>
        <Slogan>금융 기능을 사용하실 수 있습니다!</Slogan>
      </SloganView>
      <Body>
        <IconView>
          <Icon source={imagePath.sync} resizeMode="cover" />
        </IconView>
        <InfoBox>
          <InfoTitleView>
            <WithLocalSvg
              width={18}
              height={18}
              stroke={font_lightgray}
              asset={iconPath.info}
            />
            <InfoTitle>알려드려요</InfoTitle>
          </InfoTitleView>
          <InfoView>
            <Info>
              &middot; 은행 기능은 앱에 등록된 핀 번호를 통해 이용하실 수
              있습니다.
            </Info>
          </InfoView>
        </InfoBox>
      </Body>
      <AppButton style={BottomButton} text="계속하기" onPress={handleToMain} />
    </Wrapper>
  );
};

export default SyncComplete;
