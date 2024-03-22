import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 8;
  background: ${bg_light};
  margin-bottom: 15px;
  padding: 20px 15px;
`;

const TitleView = styled.View``;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 28px;
  font-weight: 600;
`;

const SubTitleView = styled.View`
  margin-top: 15px;
`;

const SubTitleText = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  font-weight: 600;
`;

const ItemView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const ItemTitleText = styled.Text`
  color: ${font_dark};
`;

const ItemContentText = styled.Text``;

const Hr = styled.View`
  border-bottom-width: 1px;
  margin-top: 5px;
`;

export {
  Hr,
  ItemContentText,
  ItemTitleText,
  ItemView,
  SubTitleText,
  SubTitleView,
  TitleText,
  TitleView,
  Wrapper,
};
