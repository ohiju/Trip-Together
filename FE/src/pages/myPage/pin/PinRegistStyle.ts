import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const InputView = styled.View`
  align-self: center;
  flex-direction: row;
  align-items: center;
  width: 90%;
  background: transparent;
  border-bottom-width: 1px;
  margin-top: 40px;
  padding-left: 5px;
`;

const Input = styled.TextInput`
  flex: 1;
  margin-left: 5px;
`;

const MessageView = styled.View`
  margin-left: 15px;
`;

const Message = styled.Text`
  color: tomato;
`;

const AnimatedMessage = Animated.createAnimatedComponent(Message);

export {AnimatedMessage, Input, InputView, MessageView, Wrapper};
