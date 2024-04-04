import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import useGetSettlements from '../../../apis/flashMob/useGetSettlements';
import Settlements from '../../../components/flashMob/tranHistory/Settlements';
import TranHistoryNav from '../../../components/flashMob/tranHistory/TranHistoryNav';
import {TranHistoryStackParams} from '../../../interfaces/router/flashMob/TranHistoryStackParams';
import {RootState} from '../../../store';
import {useAppSelector} from '../../../store/hooks';
import {Wrapper} from './TranHistoryStyle';

const TranHistory = () => {
  // 데이터
  const {requester_settlements, participant_settlements} = useAppSelector(
    (state: RootState) => state.chat.settlements,
  );

  // 네비게이션 바
  const [nav, setNav] = useState(0);

  // API (번개 속 정산내역 요청 목록 전체 조회)
  const {flashmob_id} =
    useRoute<RouteProp<TranHistoryStackParams, 'TranHistory'>>().params;
  const getSettlements = useGetSettlements();
  useEffect(() => {
    getSettlements({flashmob_id});
  }, []);

  return (
    <Wrapper>
      <TranHistoryNav nav={nav} setNav={setNav} />
      {nav === 0 ? (
        <Settlements settlements={requester_settlements} type="requester" />
      ) : (
        <Settlements settlements={participant_settlements} type="participant" />
      )}
    </Wrapper>
  );
};

export default TranHistory;
