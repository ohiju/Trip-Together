import {FlatListProps} from 'react-native';
import styled, {IStyledComponent} from 'styled-components/native';
import {FastOmit} from 'styled-components/native/dist/types';
import {bg_light, bg_main, font_dark} from '../../../constants/colors';
import {attendee} from '../../../interfaces/router/flashMob/SettlementStackParams';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const TitleView = styled.View`
  background: ${bg_light};
  margin: 15px 15px 0 15px;
  padding: 15px;
  border-radius: 10px;
`;

const TitleText = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 3px;
`;

const SloganText = styled.Text``;

const Receipts: IStyledComponent<
  'native',
  FastOmit<FlatListProps<attendee>, never>
> = styled.FlatList``;

export {Receipts, SloganText, TitleText, TitleView, Wrapper};
