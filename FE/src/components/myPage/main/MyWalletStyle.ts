import styled from 'styled-components/native';
import {font_dark, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const TitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  font-weight: 600;
  margin-right: 5px;
  padding-bottom: 2px;
`;

const HistoryView = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

const History = styled.Text`
  color: ${font_lightgray};
  font-size: 16px;
  padding-bottom: 2px;
`;

const Body = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;

export {Body, Header, History, HistoryView, Title, TitleView, Wrapper};
