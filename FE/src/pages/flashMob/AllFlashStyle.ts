import styled from 'styled-components/native';
import {bg_light} from '../../constants/colors';
import {TouchableOpacity} from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${bg_light};
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const ChatRoomItem = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const AllChatRoomItem = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const ChatRoomDetails = styled.View`
  margin-left: 10px;
  width: 55%;
`;

const ChatRoomTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const MeetingInfo = styled.Text`
  font-size: 14px;
`;

const ButtonView = styled.View`
  width: 80px;
`;

export {
  Container,
  Title,
  ChatRoomItem,
  ProfileImage,
  ChatRoomDetails,
  ChatRoomTitle,
  MeetingInfo,
  ButtonView,
  AllChatRoomItem,
};
