import {IMAGE_BASE_URL} from '@env';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import {imagePath} from '../../../assets/images/imagePath';
import {
  primary,
  primary_light,
  secondary,
  secondary_light,
} from '../../../constants/colors';
import currencies, {
  currency as currencyType,
} from '../../../constants/currencies';
import groupByIsDone from '../../../hooks/groupByIsDone';
import {TranHistoryStackParams} from '../../../interfaces/router/flashMob/TranHistoryStackParams';
import {settlement as settlementType} from '../../../interfaces/states/ChatState';
import {
  Btn,
  BtnText,
  BtnView,
  ContentText,
  ContentView,
  GroupView,
  Price,
  ProfileImg,
  SettlementView,
  TitleText,
  TitleView,
  Wrapper,
} from './SettlementsStyle';

interface SettlementsProps {
  settlements: settlementType[];
  type: 'requester' | 'participant';
}

const Settlements = ({settlements, type}: SettlementsProps) => {
  // 데이터
  const groups = groupByIsDone(settlements);
  const imageUrl = (image_url: string) => {
    const result = image_url
      ? {uri: `${IMAGE_BASE_URL}/${image_url}`}
      : imagePath.profiledefault;
    return result;
  };
  const price = (settlement: settlementType) => {
    const currency = currencies.find(
      item => item.currency_code === settlement.currency_code,
    ) as currencyType;
    const unit = String.fromCharCode(currency.unit);
    const totalPrice = settlement.total_price.toLocaleString('ko-KR');

    return `${unit} ${totalPrice}`;
  };
  const background = (pressed: boolean) => {
    if (type === 'requester') {
      return pressed ? secondary_light : secondary;
    } else if (type === 'participant') {
      return pressed ? primary_light : primary;
    }
  };

  // 라우팅
  const navigation = useNavigation<NavigationProp<TranHistoryStackParams>>();
  const {flashmob_id} =
    useRoute<RouteProp<TranHistoryStackParams, 'TranHistory'>>().params;
  const handleToDetail = (settlement_id: number, currency_code: string) => {
    if (type === 'requester') {
      navigation.navigate('CurSitu', {
        flashmob_id,
        settlement_id,
        currency_code,
      });
    } else if (type === 'participant') {
      navigation.navigate('Receipt', {
        flashmob_id,
        settlement_id,
        currency_code,
      });
    }
  };

  return (
    <Wrapper>
      {groups.map(([title, group]) => (
        <GroupView key={title}>
          <TitleView>
            <TitleText>{title}</TitleText>
          </TitleView>
          {group.map(settlement => (
            <SettlementView key={settlement.settlement_id}>
              <ProfileImg
                source={imageUrl(settlement.receiver_image_url)}
                resizeMode="cover"
              />
              <ContentView>
                <ContentText>
                  {settlement.receiver_nickname} 님의 요청
                </ContentText>
                <Price>{price(settlement)}</Price>
              </ContentView>
              <BtnView>
                <Btn
                  onPress={() =>
                    handleToDetail(
                      settlement.settlement_id,
                      settlement.currency_code,
                    )
                  }
                  style={({pressed}) => ({
                    backgroundColor: background(pressed),
                  })}>
                  <BtnText>
                    {type === 'participant' ? '영수증 보기' : '정산 현황'}
                  </BtnText>
                </Btn>
              </BtnView>
            </SettlementView>
          ))}
        </GroupView>
      ))}
    </Wrapper>
  );
};

export default Settlements;
