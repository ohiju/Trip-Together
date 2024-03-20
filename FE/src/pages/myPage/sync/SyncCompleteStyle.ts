import styled from 'styled-components/native';
import {bg_light, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const IconView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Icon = styled.Image`
  width: 100%;
`;

const InfoBox = styled.View`
  margin: 15px;
`;

const InfoTitleView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoTitle = styled.Text`
  color: ${font_lightgray};
  font-weight: 600;
  margin-left: 3px;
`;

const InfoView = styled.View`
  margin-top: 5px;
`;

const Info = styled.Text``;

export {
  Icon,
  IconView,
  Info,
  InfoBox,
  InfoTitle,
  InfoTitleView,
  InfoView,
  Wrapper,
};
