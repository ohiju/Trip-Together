import {IMAGE_BASE_URL} from '@env';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../../assets/icons/iconPath';
import {imagePath} from '../../../assets/images/imagePath';
import AppButton from '../../../components/common/AppButton';
import {
  Body,
  Slogan,
  SloganView,
  Title,
  TitleView,
} from '../../../components/common/InfoPageStyle';
import ShakeMessage from '../../../components/common/ShakeMessage';
import {BottomButton} from '../../../constants/AppButton';
import {bg_lightgray, secondary} from '../../../constants/colors';
import currencies from '../../../constants/currencies';
import {
  SelectHistoryProps,
  SettlementStackParams,
} from '../../../interfaces/router/flashMob/SettlementStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  CheckBox,
  MemberView,
  Members,
  MessageView,
  Nickname,
  OrderInput,
  OrderText,
  OrderView,
  ProfileImg,
  Wrapper,
} from './SettlementStyle';

const Settlement = () => {
  // 데이터
  const {members, currency_code} = useAppSelector(
    (state: RootState) => state.chat.flashmob,
  );
  const imageUrl = (image_url: string) => {
    const result = image_url
      ? {uri: `${IMAGE_BASE_URL}/${image_url}`}
      : imagePath.profiledefault;
    return result;
  };
  const nickname = (memberNickname: string, memberUsername: string) => {
    const result = memberNickname ? memberNickname : memberUsername;
    return result;
  };
  const currency = currencies.find(
    item => item.currency_code === currency_code,
  );

  // 체크박스 (초기 인원 설정)
  const [checked, setChecked] = useState<number[]>(
    members.map(member => member.member_id),
  );
  const isChecked = (member_id: number) => {
    if (checked.includes(member_id)) {
      return secondary;
    } else {
      return bg_lightgray;
    }
  };
  const handleCheck = (member_id: number) => {
    if (checked.includes(member_id)) {
      const result = checked.filter(item => item !== member_id);
      setChecked(result);
    } else {
      const result = [...checked, member_id];
      setChecked(result);
    }
  };

  // 인풋
  const [order, setOrder] = useState('1');
  const [message, setMessage] = useState('');
  const [isInRange, setIsInRange] = useState(true);
  const handleOrder = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const value = e.nativeEvent.text;
    const valueInt = parseInt(value, 10);
    if ((valueInt > 5 || valueInt < 1) && !isNaN(valueInt)) {
      setOrder(e.nativeEvent.text);
      setMessage('값을 잘못 입력하셨습니다.');
      setIsInRange(false);
    } else if (isNaN(valueInt) && value !== '') {
      setOrder('1');
      setMessage('숫자만 입력 가능합니다.');
      setIsInRange(false);
    } else if (value === '') {
      setOrder(e.nativeEvent.text);
      setMessage('');
      setIsInRange(false);
    } else {
      setOrder(e.nativeEvent.text);
      setMessage('');
      setIsInRange(true);
    }
  };

  // 라우팅
  const {flashmob_id} =
    useRoute<RouteProp<SettlementStackParams, 'Settlement'>>().params;
  const navigation = useNavigation<NavigationProp<SettlementStackParams>>();
  const handleToNext = () => {
    if (!currency) return;
    const attendees = checked.map(member_id => {
      return {
        member_id,
        member_price: 0,
        receipts: [],
      };
    });
    const props: SelectHistoryProps = {
      flashmob_id,
      order: parseInt(order, 10),
      currency,
      attendees,
      total_price: 0,
    };
    navigation.navigate('SelectHistory', props);
  };

  // API (채팅방 정보 조회)

  return (
    <Wrapper>
      <TitleView>
        <Title>정산할 친구와 차수를</Title>
        <Title>확인해주세요</Title>
      </TitleView>
      <SloganView>
        <Slogan>최대 5차 정산까지 가능해요!</Slogan>
      </SloganView>
      <Body>
        <OrderView>
          <OrderInput
            value={order}
            onChange={handleOrder}
            keyboardType="numeric"
          />
          <OrderText> 차 정산 하기</OrderText>
        </OrderView>
        <MessageView>
          {message ? <ShakeMessage>{message}</ShakeMessage> : null}
        </MessageView>
        <Members>
          {members.map(member => (
            <MemberView key={member.member_id}>
              <ProfileImg source={imageUrl(member.image_url)} />
              <Nickname>{nickname(member.nickname, member.username)}</Nickname>
              <CheckBox onPress={() => handleCheck(member.member_id)}>
                <WithLocalSvg
                  width={30}
                  height={30}
                  fill={isChecked(member.member_id)}
                  asset={iconPath.checkcircle}
                />
              </CheckBox>
            </MemberView>
          ))}
        </Members>
      </Body>
      <AppButton
        style={BottomButton}
        text="정산하기"
        disabled={!isInRange || !currency}
        onPress={handleToNext}
      />
    </Wrapper>
  );
};

export default Settlement;
