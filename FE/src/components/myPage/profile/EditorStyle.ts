import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  background: ${bg_light};
  margin-bottom: 15px;
  padding: 15px;
`;

const ImageView = styled.View`
  flex: 1;
  min-height: 150px;
  align-items: center;
`;

const ImageBtn = styled.TouchableOpacity`
  position: relative;
  height: 100%;
  aspect-ratio: 1/1;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 500px;
`;

const CameraIcon = styled.Image`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 30px;
  height: 30px;
`;

const InputBox = styled.View`
  margin-top: 30px;
`;

const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  padding: 0 5px;
`;

const InputTitle = styled.Text`
  color: ${font_dark};
  font-size: 18px;
  font-weight: 600;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
`;

export {
  CameraIcon,
  Image,
  ImageBtn,
  ImageView,
  Input,
  InputBox,
  InputTitle,
  InputView,
  Wrapper,
};
