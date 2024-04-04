import styled from 'styled-components/native';
import {bg_lightgray, primary} from '../../../constants/colors';
import AppInput from '../../common/AppInput';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-color: ${bg_lightgray};
  padding: 0 10px;
`;

const AddonBtn = styled.Pressable`
  padding: 10px 5px;
`;

const Input = styled(AppInput)`
  flex: 1;
  margin: 0 10px 0 5px;
`;

const SendBtn = styled.TouchableOpacity`
  background: ${primary};
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

export {AddonBtn, Input, SendBtn, Wrapper};
