import styled from 'styled-components/native';

const Wrapper = styled.View`
  height: 40%;
  flex-direction: row;
  margin-top: 16px;
`;

const TripHistoryView = styled.View`
  flex: 1;
  margin-right: 8px;
`;

const FlashHistoryView = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export {FlashHistoryView, TripHistoryView, Wrapper};
