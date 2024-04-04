import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {bg_light, bg_main, font_dark} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${bg_light};
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const SearchInput = styled.TextInput`
  position: relative;
  background-color: ${bg_main};
  width: 100%;
  padding: 15px 15px;
  margin: 15px 0 20px 0;
  border-radius: 10px;
  font-size: 18px;
`;

const SearchResult = styled.View`
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border-bottom-width: 0.5px;
`;

const SearchResultBox = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
`;

const SearchText = styled.Text`
  color: ${font_dark};
  font-size: 16px;
`;

export {SearchInput, SearchResult, SearchResultBox, SearchText, Wrapper};
