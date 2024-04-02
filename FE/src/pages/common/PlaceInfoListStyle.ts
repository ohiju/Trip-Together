import styled from 'styled-components/native';
import {bg_light} from '../../constants/colors';

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ThumbnailContainer = styled.View`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const Thumbnail = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: 10px;
`;

const DetailsContainer = styled.View`
  flex: 1;
`;

const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Address = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Rating = styled.Text`
  font-size: 14px;
  color: green;
  margin-right: 5px;
  margin-top: 4px;
  margin-bottom: 3px;
`;

const Price = styled.Text`
  font-size: 14px;
`;

const DetailsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 62%;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`;

const ButtonView = styled.View`
  width: 80px;
  margin-right: 5px;
`;

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

export {
  ItemContainer,
  ThumbnailContainer,
  Thumbnail,
  DetailsContainer,
  StarContainer,
  Name,
  Address,
  Rating,
  Price,
  DetailsRow,
  ButtonContainer,
  ButtonView,
  Wrapper,
};
