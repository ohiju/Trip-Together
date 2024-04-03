import styled from 'styled-components/native';
import DismissKeyboardView from '../../components/common/DismissKeyboardView';
import {bg_light, bg_lightgray} from '../../constants/colors';

const Wrapper = styled(DismissKeyboardView)`
  flex: 1;
  background-color: ${bg_light};
`;

const TitleContainer = styled.View`
  padding: 0 15px;
  margin-top: 30px;
`;

const TitleInput = styled.TextInput`
  padding: 20px 0;
  margin: 0 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${bg_lightgray};
  font-size: 22px;
  text-align: center;
`;

const TitleLength = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15px;
`;

const TitleLengthText = styled.Text`
  font-size: 12px;
`;

export {TitleContainer, TitleInput, TitleLength, TitleLengthText, Wrapper};
