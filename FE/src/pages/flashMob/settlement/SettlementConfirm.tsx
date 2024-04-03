import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import usePostSettlement, {
  PostSettlementData,
  PostSettlementParams,
} from '../../../apis/flashMob/usePostSettlement';
import AppButton from '../../../components/common/AppButton';
import Receipt from '../../../components/flashMob/settlement/Receipt';
import {BottomButton} from '../../../constants/AppButton';
import {SettlementStackParams} from '../../../interfaces/router/flashMob/SettlementStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {} from './SelectHistoryStyle';
import {
  Receipts,
  SloganText,
  TitleText,
  TitleView,
  Wrapper,
} from './SettlementConfirmStyle';

const SettlementConfirm = () => {
  const {flashmob_id, currency, total_price, attendees} =
    useRoute<RouteProp<SettlementStackParams, 'SettlementConfirm'>>().params;
  const userId = useAppSelector(
    (state: RootState) => state.user.user.member_id,
  );

  // API
  const postSettlement = usePostSettlement();
  const handleSettlement = () => {
    const filtered = attendees.filter(item => item.member_id !== userId);
    const data: PostSettlementData = {
      currency_code: currency.currency_code,
      total_price,
      attendees_count: attendees.length,
      attendees: filtered,
    };
    const params: PostSettlementParams = {
      flashmob_id,
    };
    postSettlement(params, data);
  };

  return (
    <Wrapper>
      <TitleView>
        <TitleText>정산 확인</TitleText>
        <SloganText>좌우로 스크롤하여 정산 내역을 확인하세요.</SloganText>
      </TitleView>
      <Receipts
        horizontal={true}
        data={attendees}
        renderItem={({item}) => <Receipt attendee={item} />}
        keyExtractor={item => item.member_id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <AppButton
        style={BottomButton}
        text="정산요청"
        onPress={handleSettlement}
      />
    </Wrapper>
  );
};

export default SettlementConfirm;
