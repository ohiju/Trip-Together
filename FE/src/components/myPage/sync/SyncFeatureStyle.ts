import styled from 'styled-components/native';
import {font_dark} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 15px;
`;

const FeatureImageView = styled.View`
  height: 100%;
`;

const FeatureImage = styled.Image`
  height: 100%;
  aspect-ratio: 1/1;
`;

const FeatureView = styled.View`
  flex: 1;
  margin-left: 14px;
  justify-content: center;
`;

const FeatureTitle = styled.Text`
  color: ${font_dark};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Feature = styled.Text`
  font-size: 15px;
`;

export {
  Feature,
  FeatureImage,
  FeatureImageView,
  FeatureTitle,
  FeatureView,
  Wrapper,
};
