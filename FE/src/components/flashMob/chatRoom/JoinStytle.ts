import styled from 'styled-components/native';
import {bg_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0 10px 0;
`;

const Hr = styled.View`
  flex: 1;
  border-color: ${bg_lightgray};
  border-width: 1.3px;
  border-radius: 3px;
  margin: 0 5px;
`;

const Message = styled.Text``;

export {Hr, Message, Wrapper};
