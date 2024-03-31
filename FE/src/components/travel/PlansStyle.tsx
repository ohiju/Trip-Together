import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {bg_main, font_dark, font_lightgray} from '../../constants/colors';

const PlanView = styled(TouchableOpacity)`
  background-color: white;
  width: 90%;
  height: 33%;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  padding: 5px;
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
`;

const ButtonText = styled.Text`
  font-size: 50px;
  margin-bottom: 0px;
`;

const ButtonImage = styled.Image`
  width: 30px;
  height: 30px;
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
  width: 60px;
  height: 60px;
  resize-mode: contain;
  margin-bottom: 25px;
`;

const StartCityText = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

const DdayText = styled.Text`
  font-size: 28px;
  font-weight: 900;
`;

const DurationText = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  font-weight: bold;
`;

const CityName = styled.Text`
  font-weight: bold;
`;

const PlanMoney = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MoneyImage = styled.Image`
  width: 50px;
  height: 40px;
  resize-mode: contain;
`;

const MoneyUnit = styled.Text`
  font-size: 27px;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 3px;
`;

const MoneyText = styled.Text`
  font-size: 25px;
  font-weight: 900;
`;

const Wrapper = styled(TouchableOpacity)`
  height: 90%;
  width: 90%;
  align-items: center;
  justify-content: center;
  border: 1px dashed black;
  border-radius: 10px;
  background: ${bg_main};
`;

const AddWalletView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

const AddWallet = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  margin-left: 6px;
`;

const PlaceholderView = styled.Text``;

const Placeholder = styled.Text`
  color: ${font_lightgray};
  font-size: 10px;
`;

export {
  PlanView,
  PlanTitle,
  PlanCenter,
  PlanSlideButton,
  ButtonText,
  ButtonImage,
  StartCityText,
  DdayText,
  DurationText,
  CityName,
  PlanDescription,
  PlanDescriptionBox,
  PlanImage,
  PlanMoney,
  MoneyImage,
  MoneyUnit,
  MoneyText,
  Wrapper,
  AddWalletView,
  AddWallet,
  PlaceholderView,
  Placeholder,
};
