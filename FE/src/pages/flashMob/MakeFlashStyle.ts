import styled from 'styled-components/native';
import {bg_light, bg_lightgray} from '../../constants/colors';
import {Picker} from '@react-native-picker/picker';

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${bg_light};
`;

const SideBox = styled.View`
  height: 6%;
`;

const Box = styled.View`
  padding: 40px;
  height: 150px;
`;

const InputLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.TextInput`
  width: 95%;
  padding: 1px 15px;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${bg_lightgray};
  margin-bottom: 20px;
`;

const DateTimePickerText = styled.Text`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const PickerContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

const StyledPicker = styled(Picker)`
  width: 100%;
  height: 40px;
`;

export {
  Wrapper,
  SideBox,
  Box,
  InputLabel,
  InputField,
  DateTimePickerText,
  PickerContainer,
  StyledPicker,
};
