import {IMAGE_BASE_URL} from '@env';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import usePatchFlashMob, {
  PatchFlashMobData,
  PatchFlashMobParams,
} from '../../../apis/flashMob/usePatchFlashMob';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_danger, bg_lightgray, primary} from '../../../constants/colors';
import {TabParams} from '../../../interfaces/router/TabParams';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {ProfileMainProps} from '../../../interfaces/router/myPage/ProfileStackParams';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {
  Btn,
  BtnText,
  BtnView,
  Card,
  Content,
  ContentView,
  Image,
  Nickname,
  ProfileImg,
  ProfileView,
  Wrapper,
} from './AttendStyle';

interface AttendProps {
  message: messageType;
}

const Attent = ({message}: AttendProps) => {
  // 데이터
  const image_url = message.sender_image_url
    ? {uri: `${IMAGE_BASE_URL}/${message.sender_image_url}`}
    : imagePath.profiledefault;
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;

  // API
  const patchFlashMob = usePatchFlashMob();
  const params: PatchFlashMobParams = {
    flashmob_id,
    member_id: message.sender_id,
  };
  const handleFlashmob = (isAccept: boolean) => {
    const data: PatchFlashMobData = {
      status: isAccept ? 'ATTEND' : 'REFUSE_UNCHECK',
    };
    patchFlashMob(params, data);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<TabParams>>();
  const handleToProfile = () => {
    const props: ProfileMainProps = {
      member_id: message.sender_id,
    };
    navigation.navigate('ProfileMain', props);
  };

  return (
    <Wrapper>
      <Card>
        <Image source={imagePath.attend} resizeMode="cover" />
        <ProfileView>
          <ProfileImg source={image_url} resizeMode="cover" />
          <ContentView>
            <Content>
              <Nickname>{message.sender_nickname}</Nickname> 님 께서 참가를
              요청하셨습니다. 수락하시겠습니까?
            </Content>
          </ContentView>
        </ProfileView>
        <BtnView>
          <Btn
            style={{backgroundColor: primary}}
            onPress={() => handleFlashmob(true)}>
            <BtnText>수락</BtnText>
          </Btn>
          <Btn
            style={{backgroundColor: bg_lightgray}}
            onPress={handleToProfile}>
            <BtnText>프로필 보기</BtnText>
          </Btn>
          <Btn
            style={{backgroundColor: bg_danger}}
            onPress={() => handleFlashmob(false)}>
            <BtnText>거절</BtnText>
          </Btn>
        </BtnView>
      </Card>
    </Wrapper>
  );
};

export default Attent;
