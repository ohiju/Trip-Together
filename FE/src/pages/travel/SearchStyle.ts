import styled from 'styled-components/native';
import {bg_main, bg_light} from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${bg_light};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  position: relative;
  background-color: ${bg_main};
  width: 80%;
  padding: 1px 15px;
  height: 40px;
  margin-top: 60px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const SearchResult = styled.View`
  padding: 10px;
  width: 90%;
  margin-bottom: 10px;
  border-bottom-width: 0.5px;
`;

const SearchResultBox = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
`;

export {Wrapper, SearchInput, SearchResult, SearchResultBox};
