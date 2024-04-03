import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {bg_light, bg_lightgray, font_dark} from '../../constants/colors';

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  align-items: center;
  justify-content: space-between;
`;

const SliderContainer = styled.View`
  position: relative;
  width: 100%;
  height: 150px;
  background-color: ${bg_light};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const DragBar = styled(TouchableOpacity)`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 25px;
  border: 2px solid ${bg_lightgray};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const ButtonImage = styled.Image`
  width: 100%;
  height: 25px;
`;

const SliderFullContent = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  margin-top: 60px;
  background-color: ${bg_light};
  align-items: center;
  justify-content: center;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const PlanIcon = styled.TouchableOpacity`
  align-items: center;
`;

const PlanImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const PlanText = styled.Text`
  color: ${font_dark};
  font-size: 12px;
`;

export {
  ButtonImage,
  Container,
  DragBar,
  PlanIcon,
  PlanImage,
  PlanText,
  SliderContainer,
  SliderFullContent,
  Wrapper,
};
