import React from 'react';
import GroupedHistory from '../../components/myPage/cardHistory/GroupedHistory';
import groupByDate from '../../hooks/groupByDate';
import {RootState} from '../../store';
import {useAppSelector} from '../../store/hooks';
import {Wrapper} from './CardHistoryStyle';

const CardHistory = () => {
  const histories = useAppSelector(
    (state: RootState) => state.cardHistory.content,
  );
  const groupedHistories = groupByDate(histories);

  // API

  return (
    <Wrapper>
      {groupedHistories.map(([date, groupedHistory]) => (
        <GroupedHistory
          key={date}
          date={date}
          groupedHistory={groupedHistory}
        />
      ))}
    </Wrapper>
  );
};

export default CardHistory;
