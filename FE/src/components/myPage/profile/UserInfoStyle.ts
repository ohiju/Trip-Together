import styled from 'styled-components/native';
import {bg_light, font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  background: ${bg_light};
  padding: 15px;
`;

const TitleText = styled.Text`
  color: ${font_dark};
  font-size: 24px;
  font-weight: 600;
`;

const ContentRaw = styled.View`
  flex-direction: row;
`;

const ContentView = styled.View`
  flex: 1;
  margin: 10px 0;
`;

const ContentTitle = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  font-weight: 600;
`;

const ContentText = styled.Text`
  font-size: 16px;
`;

export {ContentRaw, ContentText, ContentTitle, ContentView, TitleText, Wrapper};
