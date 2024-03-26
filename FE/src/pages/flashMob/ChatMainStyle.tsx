import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {
  bg_light,
  bg_lightgray,
  font_dark,
  primary,
} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
`;

const ChatHeader = styled.View`
  height: 60px;
  flex-direction: row;
  background-color: ${bg_light};
`;

const HeaderBox = styled(TouchableOpacity)`
  position: relative;
  width: 50%;
  border: 0.5px solid ${font_dark};
  justify-content: center;
  align-items: center;
`;

const HeaderHighlight = styled.View`
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  background-color: ${primary};
`;

const HeaderNone = styled.View`
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  background-color: ${bg_lightgray};
`;

const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export {
  Wrapper,
  ChatHeader,
  HeaderBox,
  HeaderText,
  HeaderHighlight,
  HeaderNone,
};
