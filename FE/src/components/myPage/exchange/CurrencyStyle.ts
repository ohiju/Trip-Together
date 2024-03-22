import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

const NationView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NationImage = styled.Image`
  width: 28px;
  height: 28px;
`;

const NationText = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  margin-left: 5px;
  margin-bottom: 3px;
`;

const UnitView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const UnitText = styled.Text`
  font-size: 18px;
  margin-right: 5px;
`;

const Unit = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export {NationImage, NationText, NationView, Unit, UnitText, UnitView, Wrapper};
