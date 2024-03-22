import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {font_danger} from '../../constants/colors';

const Message = styled.Text`
  color: ${font_danger};
`;

const AnimatedMessage = Animated.createAnimatedComponent(Message);

export {AnimatedMessage, Message};
