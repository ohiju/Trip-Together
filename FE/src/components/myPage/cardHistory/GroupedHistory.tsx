import React from 'react';
import {cardHistory} from '../../../interfaces/states/CardHistoryState';
import {DateText, DateView, Wrapper} from './GroupedHistroyStyle';
import History from './History';

interface HistoryProps {
  date: string;
  groupedHistory: cardHistory[];
}

const GroupedHistory = ({date, groupedHistory}: HistoryProps) => {
  return (
    <Wrapper>
      <DateView>
        <DateText>{date}</DateText>
      </DateView>
      {groupedHistory.map(history => (
        <History key={history.account_history_id} history={history} />
      ))}
    </Wrapper>
  );
};

export default GroupedHistory;
