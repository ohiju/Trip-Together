import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const PlanView = styled.View`
  width: 100%;
  height: 35%;
  align-items: center;
  justify-content: space-around;
  border: 1px;
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

const IconView = styled.View`
  width: 100%;
  height: 15%;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const RecommendView = styled.View`
  width: 100%;
  height: 35%;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  border: 1px;
`;

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
  IconView,
  RecommendView,
  Wrapper,
};
