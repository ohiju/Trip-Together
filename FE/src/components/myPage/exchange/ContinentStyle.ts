import styled from 'styled-components/native';
import {bg_lightgray, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${bg_lightgray};
`;

const ContinentView = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

const ContinentText = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 24px;
`;

const CurrencyBox = styled.View`
  border-top-width: 1px;
  border-color: ${bg_lightgray};
`;

export {ContinentText, ContinentView, CurrencyBox, Wrapper};
