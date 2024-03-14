import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const PlanView = styled.View`
  background-color: white;
  width: 95%;
  height: 35%;
  align-items: center;
  justify-content: space-around;
`;

const PlanTitle = styled.Text`
  font-size: 25px;
`;

const PlanCenter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const PlanSlideButton = styled(TouchableOpacity)`
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const ButtonText = styled.Text`
  font-size: 40px;
  margin-bottom: 0px;
`;

const PlanDescription = styled.View`
  width: 70%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const PlanDescriptionBox = styled.View`
  height: 50px;
  align-items: center;
  justify-content: space-around;
`;

const PlanImage = styled.Image`
  width: 40px;
  height: 30px;
  resize-mode: contain;
`;

const PlanMoney = styled.View``;

export {
  PlanView,
  PlanTitle,
  PlanCenter,
  PlanSlideButton,
  ButtonText,
  PlanDescription,
  PlanDescriptionBox,
  PlanImage,
  PlanMoney,
};
