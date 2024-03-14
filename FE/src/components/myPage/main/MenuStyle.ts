import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const TitleView = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  margin-left: 10px;
`;

const CaretView = styled.View``;

export {CaretView, Title, TitleView, Wrapper};
