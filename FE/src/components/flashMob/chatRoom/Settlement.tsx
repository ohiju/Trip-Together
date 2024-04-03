import {IMAGE_BASE_URL} from '@env';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {bg_lightgray, primary} from '../../../constants/colors';
import {ChatStackParams} from '../../../interfaces/router/flashMob/ChatMainStackParams';
import {FlashMobStackParams} from '../../../interfaces/router/flashMob/FlashMobStackParams';
import {
  CurSituProps,
  ReceiptProps,
} from '../../../interfaces/router/flashMob/TranHistoryStackParams';
import {message as messageType} from '../../../interfaces/states/ChatState';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
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
} from './SettlementStyle';

interface SettlementProps {
  message: messageType;
}

interface settlementData {
  settlement_id: number;
  currency_code: string;
}

const Settlement = ({message}: SettlementProps) => {
  const image_url = message.sender_image_url
    ? {uri: `${IMAGE_BASE_URL}/${message.sender_image_url}`}
    : imagePath.profiledefault;
  const {settlement_id, currency_code}: settlementData = JSON.parse(
    message.content,
  );
  const userId = useAppSelector(
    (state: RootState) => state.user.user.member_id,
  );

  // 라우팅
  const {flashmob_id} =
    useRoute<RouteProp<ChatStackParams, 'ChatRoom'>>().params;
  const navigation = useNavigation<NavigationProp<FlashMobStackParams>>();
  const handleToReceipt = () => {
    const props: ReceiptProps = {
      flashmob_id,
      settlement_id,
      currency_code,
    };
    navigation.navigate('Receipt', props);
  };
  const handleToCurSitu = () => {
    const props: CurSituProps = {
      flashmob_id,
      settlement_id,
      currency_code,
    };
    navigation.navigate('CurSitu', props);
  };

  return (
    <Wrapper $isMe={message.sender_id === userId}>
      <Card>
        <Image source={imagePath.settlement} resizeMode="cover" />
        <ProfileView>
          <ProfileImg source={image_url} resizeMode="cover" />
          <ContentView>
            <Content>
              <Nickname>{message.sender_nickname}</Nickname> 님이 정산하기를
              요청했어요!
            </Content>
          </ContentView>
        </ProfileView>
        <BtnView>
          {message.sender_id !== userId ? (
            <Btn style={{backgroundColor: primary}} onPress={handleToReceipt}>
              <BtnText>영수증 보기</BtnText>
            </Btn>
          ) : (
            <Btn
              style={{backgroundColor: bg_lightgray}}
              onPress={handleToCurSitu}>
              <BtnText>정산 현황</BtnText>
            </Btn>
          )}
        </BtnView>
      </Card>
    </Wrapper>
  );
};

export default Settlement;
