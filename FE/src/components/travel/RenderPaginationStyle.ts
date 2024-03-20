import styled from 'styled-components/native';
import {bg_light} from '../../constants/colors';

const PaginationStyle = styled.View`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const PaginationText = styled.Text`
  color: ${bg_light};
  font-size: 16px;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Item = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 100%;
  align-items: center;
`;

const ItemText = styled.Text`
  font-size: 18px;
`;

export {
  PaginationStyle,
  PaginationText,
  CenteredView,
  ModalView,
  Item,
  ItemText,
};
