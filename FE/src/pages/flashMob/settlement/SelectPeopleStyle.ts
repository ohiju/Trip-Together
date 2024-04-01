import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  bg_main,
  font_dark,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_main};
`;

const TotalView = styled.View`
  flex-direction: row;
  background: ${bg_light};
  margin: 10px 15px 0 15px;
  padding: 15px;
  border-radius: 10px;
`;

const TotalLeftView = styled.View`
  flex: 1;
`;

const TotalMessage = styled.Text``;

const TotalText = styled.Text`
  color: ${font_dark};
  font-weight: 700;
  font-size: 48px;
`;

const TotalRightView = styled.View`
  align-items: center;
  justify-content: center;
`;

const RedistributeView = styled.Pressable`
  border-width: 1px;
  border-color: ${bg_lightgray};
  border-radius: 100px;
  padding: 10px 15px;
`;

const RedistributeText = styled.Text``;

const MessageView = styled.View`
  height: 22px;
  margin: 0 15px;
  justify-content: center;
`;

const People = styled.ScrollView`
  background: ${bg_light};
  margin: 0 15px 10px 15px;
  padding: 15px;
  border-radius: 10px;
`;

const PeopleMessage = styled.Text`
  margin-bottom: 20px;
`;

const PersonView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const Nickname = styled.Text`
  flex: 1;
  margin-left: 10px;
  color: ${font_dark};
  font-size: 16px;
  font-weight: 700;
`;

const AmmountView = styled.View`
  width: 26%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${bg_lightgray};
`;

const Unit = styled.Text`
  font-size: 16px;
`;

const Ammount = styled.TextInput`
  flex: 1;
  font-size: 16px;
  text-align: center;
`;

export {
  Ammount,
  AmmountView,
  MessageView,
  Nickname,
  People,
  PeopleMessage,
  PersonView,
  ProfileImg,
  RedistributeText,
  RedistributeView,
  TotalLeftView,
  TotalMessage,
  TotalRightView,
  TotalText,
  TotalView,
  Unit,
  Wrapper,
};
