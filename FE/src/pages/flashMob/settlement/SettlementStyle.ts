import styled from 'styled-components/native';
import {
  bg_light,
  bg_main,
  font_light,
  secondary,
} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const OrderView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${secondary};
  border-width: 1px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-color: ${bg_main};
  border-radius: 10px;
  margin: 15px 15px 0 15px;
  padding: 10px 0;
`;

const OrderInput = styled.TextInput`
  font-size: 24px;
  font-weight: 600;
  background: ${bg_light};
  border-radius: 10px;
  padding: 3px 5px 3px 13px;
`;

const OrderText = styled.Text`
  color: ${font_light};
  font-size: 24px;
  font-weight: 600;
  margin-left: 5px;
`;

const MessageView = styled.View`
  height: 20px;
  margin: 0 15px;
`;

const Members = styled.ScrollView`
  flex: 1;
  z-index: 0;
  margin: 5px 15px 0 15px;
`;

const MemberView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
`;

const Nickname = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 15px;
`;

const CheckBox = styled.Pressable``;

const SelectView = styled.View`
  position: relative;
  z-index: 1;
  flex-direction: row;
  padding: 0 15px;
  height: 60px;
  align-items: center;
  justify-content: center;
  justify-content: flex-end;
`;

const SelectTitle = styled.Text`
  font-size: 18px;
`;

const Select = styled.Pressable`
  width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  padding: 10px 0;
`;

const SelectText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 18px;
  margin-right: 10px;
`;

const OptionView = styled.View`
  position: absolute;
  bottom: 55px;
  right: 15px;
  width: 35%;
  align-items: center;
  gap: 10px;
  background: ${bg_light};
  border-radius: 10px;
`;

const Option = styled.Pressable`
  width: 100%;
  align-items: center;
  padding: 15px 0;
  border-width: 1px;
  border-radius: 10px;
`;

const OptionText = styled.Text`
  font-size: 18px;
`;

export {
  CheckBox,
  MemberView,
  Members,
  MessageView,
  Nickname,
  Option,
  OptionText,
  OptionView,
  OrderInput,
  OrderText,
  OrderView,
  ProfileImg,
  Select,
  SelectText,
  SelectTitle,
  SelectView,
  Wrapper,
};
