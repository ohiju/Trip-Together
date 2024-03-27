import styled from 'styled-components/native';
import {font_danger, primary} from '../../../constants/colors';

const Wrapper = styled.View`
  margin: 25px 15px;
`;

const TopView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const NationView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NationImg = styled.Image`
  width: 23px;
  height: 23px;
  border-radius: 200px;
`;

const NationText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-left: 5px;
`;

const QuantityText = styled.Text<{$sign: string}>`
  color: ${({$sign}) => ($sign ? font_danger : primary)};
  font-size: 14px;
  font-weight: 600;
`;

const BottomView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TypeText = styled.Text``;

const BalaceText = styled.Text``;

export {
  BalaceText,
  BottomView,
  NationImg,
  NationText,
  NationView,
  QuantityText,
  TopView,
  TypeText,
  Wrapper,
};
