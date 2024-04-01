import {IMAGE_BASE_URL} from '@env';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import {imagePath} from '../../../assets/images/imagePath';
import AppButton from '../../../components/common/AppButton';
import ShakeMessage from '../../../components/common/ShakeMessage';
import {BottomButton} from '../../../constants/AppButton';
import {bg_light, bg_main} from '../../../constants/colors';
import {
  SelectHistoryProps,
  SettlementConfirmProps,
  SettlementStackParams,
} from '../../../interfaces/router/flashMob/SettlementStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {
  Ammount,
  AmmountView,
  MessageView,
  Nickname,
  People,
  PeopleMessage,
  PersonView,
  ProfileImg,
  RedistributeText,
  RedistributeView,
  TotalLeftView,
  TotalMessage,
  TotalRightView,
  TotalText,
  TotalView,
  Unit,
  Wrapper,
} from './SelectPeopleStyle';

const SelectPeople = () => {
  // 데이터
  const {
    flashmob_id,
    order,
    receipts,
    total,
    currency,
    attendees,
    total_price,
  } = useRoute<RouteProp<SettlementStackParams, 'SelectPeople'>>().params;
  const unit = String.fromCharCode(currency.unit);
  const {members} = useAppSelector((state: RootState) => state.chat.flashmob);
  const attendeeIds = attendees.map(attendee => attendee.member_id);
  const filteredMembers = members.filter(member =>
    attendeeIds.includes(member.member_id),
  );
  const imageUrl = (image_url: string) => {
    const result = image_url
      ? {uri: `${IMAGE_BASE_URL}/${image_url}`}
      : imagePath.profiledefault;
    return result;
  };

  // 금액 배분
  const [message, setMessage] = useState('');
  const [ammounts, setAmmounts] = useState(
    filteredMembers.map(member => {
      return {
        member_id: member.member_id,
        value: '',
        placeholder: total / filteredMembers.length,
      };
    }),
  );
  const value = (member_id: number) => {
    const result = ammounts.find(item => item.member_id === member_id);
    return result?.value;
  };
  const placeholder = (member_id: number) => {
    const result = ammounts.find(item => item.member_id === member_id);
    return result?.placeholder.toString();
  };
  const handleAmmount = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    member_id: number,
  ) => {
    setMessage('');
    const text = e.nativeEvent.text;

    const result = ammounts.map(item => {
      if (item.member_id === member_id) {
        return {
          ...item,
          value: text,
        };
      } else {
        return item;
      }
    });

    setAmmounts(result);
  };
  const redistribute = () => {
    const mappedAmmounts = ammounts
      .map(item => {
        if (item.value !== '') {
          return parseInt(item.value, 10);
        }
      })
      .filter(item => item !== undefined) as number[];
    if (mappedAmmounts.length === ammounts.length) {
      setMessage('빈칸이 1개 이상 필요합니다.');
      return;
    }
    const rest = total - mappedAmmounts.reduce((sum, num) => sum + num, 0);
    const restlen = ammounts.length - mappedAmmounts.length;
    const result = ammounts.map(item => {
      if (item.value !== '') {
        return item;
      } else {
        return {
          ...item,
          placeholder: rest / restlen,
        };
      }
    });
    setAmmounts(result);
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<SettlementStackParams>>();
  const setAttendees = () => {
    const newAttendees = attendees.map(attendee => {
      const ammount = ammounts.find(
        item => item.member_id === attendee.member_id,
      ) as {member_id: number; value: string; placeholder: number};
      const ammountInt = parseInt(ammount?.value, 10);
      const member_price =
        ammount?.value !== '' ? ammountInt : ammount.placeholder;
      const rate = member_price / total;
      const member_receipts = receipts.map(item => {
        return {
          ...item,
          price: item.price * rate,
        };
      });
      return {
        member_id: attendee.member_id,
        member_price: attendee.member_price + member_price,
        receipts: [...attendee.receipts, ...member_receipts],
      };
    });
    if (order - 1 === 0) {
      const props: SettlementConfirmProps = {
        flashmob_id,
        currency,
        total_price,
        attendees: newAttendees,
      };
      navigation.navigate('SettlementConfirm', props);
    } else {
      const props: SelectHistoryProps = {
        flashmob_id,
        order: order - 1,
        currency,
        attendees: newAttendees,
        total_price: total_price + total,
      };
      navigation.navigate('SelectHistory', props);
    }
  };
  const handleToNext = () => {
    const totalAmmounts = ammounts
      .map(item => {
        if (item.value !== '') {
          return parseInt(item.value, 10);
        } else {
          return item.placeholder;
        }
      })
      .reduce((sum, num) => sum + num, 0);

    if (totalAmmounts !== total) {
      Alert.alert('금액이 맞지 않습니다.', '계속 진행하시겠습니까?', [
        {
          text: '예',
          onPress: setAttendees,
        },
        {
          text: '아니오',
        },
      ]);
    } else {
      setAttendees();
    }
  };

  return (
    <Wrapper>
      <TotalView>
        <TotalLeftView>
          <TotalMessage>사용하신 총 금액</TotalMessage>
          <TotalText>
            {unit} {total}
          </TotalText>
        </TotalLeftView>
        <TotalRightView>
          <RedistributeView
            onPress={redistribute}
            style={({pressed}) => ({
              backgroundColor: pressed ? bg_main : bg_light,
            })}>
            <RedistributeText>재분배</RedistributeText>
          </RedistributeView>
        </TotalRightView>
      </TotalView>
      <MessageView>
        {message ? <ShakeMessage>{message}</ShakeMessage> : null}
      </MessageView>
      <People>
        <PeopleMessage>인원별로 금액을 다시 배분할 수 있어요!</PeopleMessage>
        {filteredMembers.map(member => (
          <PersonView key={member.member_id}>
            <ProfileImg
              source={imageUrl(member.image_url)}
              resizeMode="cover"
            />
            <Nickname>{member.nickname}</Nickname>
            <AmmountView>
              <Unit>{unit}</Unit>
              <Ammount
                value={value(member.member_id)}
                onChange={e => handleAmmount(e, member.member_id)}
                placeholder={placeholder(member.member_id)}
                keyboardType="numeric"
              />
            </AmmountView>
          </PersonView>
        ))}
      </People>
      <AppButton style={BottomButton} text="다음" onPress={handleToNext} />
    </Wrapper>
  );
};

export default SelectPeople;
