import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {primary} from '../../constants/colors';

const Wrapper = styled(Pressable)`
  padding-top: 3px;
  align-items: center;
`;

const ChatImage = styled.Image`
  height: 25px;
  aspect-ratio: 1/1;
`;

const ChatText = styled.Text`
  color: ${primary};
  font-size: 10px;
`;

export {ChatImage, ChatText, Wrapper};
