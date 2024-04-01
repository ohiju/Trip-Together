import styled from 'styled-components/native';
import {
  bg_danger,
  bg_lightgray,
  font_dark,
  font_light,
  font_lightgray,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
`;

const ChatLeftView = styled.Pressable`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 100px;
`;

const ChatInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const ChatTitle = styled.Text`
  font-weight: 900;
  color: ${font_dark};
  margin-bottom: 5px;
`;

const ChatPlaceTime = styled.Text`
  color: ${font_lightgray};
  font-weight: 600;
`;

const ChatRightView = styled.View`
  align-items: center;
`;

const ChatMember = styled.Text`
  margin-bottom: 5px;
`;

const Btn = styled.TouchableOpacity<{$status: string}>`
  background: ${({$status}) =>
    $status === 'REFUSE_UNCHECK' ? bg_lightgray : bg_danger};
  padding: 2px 10px;
  border-radius: 15px;
`;

const BtnText = styled.Text`
  color: ${font_light};
  font-size: 12px;
`;

export {
  Btn,
  BtnText,
  ChatInfo,
  ChatLeftView,
  ChatMember,
  ChatPlaceTime,
  ChatRightView,
  ChatTitle,
  Image,
  Wrapper,
};
