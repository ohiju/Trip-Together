import styled from 'styled-components/native';
import {bg_light, bg_lightgray, font_dark} from '../../constants/colors';

const Wrapper = styled.View`
  width: 100%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

const PlaceBox = styled.View`
  position: relative;
  background: ${bg_light};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: 20px 0 10px 0;
  width: 100%;
`;

const PlaceView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
`;

const DragBar = styled.View`
  position: absolute;
  top: 8px;
  left: 35%;
  width: 30%;
  border: 2px solid ${bg_lightgray};
  border-radius: 5px;
`;

const PlaceImageView = styled.View`
  width: 25%;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  overflow: hidden;
`;

const PlaceImage = styled.Image`
  width: 140px;
  height: 140px;
`;

const PlaceInfoView = styled.View`
  flex: 1;
  margin-left: 10px;
`;

const PlaceName = styled.Text`
  color: ${font_dark};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 3px;
`;

const Address = styled.Text`
  font-size: 14px;
  margin-bottom: 3px;
`;

const Description = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.Text`
  font-size: 15px;
  margin-right: 20px;
  color: green;
`;

const Price = styled.Text`
  margin-left: 15px;
  font-size: 15px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 5px;
`;

const ButtonView = styled.View`
  flex: 1;
  flex-direction: row;
`;

const DetailsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export {
  Address,
  ButtonContainer,
  ButtonView,
  Description,
  DetailsRow,
  DragBar,
  PlaceBox,
  PlaceImage,
  PlaceImageView,
  PlaceInfoView,
  PlaceName,
  PlaceView,
  Price,
  Rating,
  Wrapper,
};
