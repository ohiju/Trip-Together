import styled from 'styled-components/native';
import {bg_light, bg_lightgray, bg_main} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const SearchBox = styled.View`
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  border-bottom-width: 1px;
  border-color: ${bg_lightgray};
`;

const SearchView = styled.View`
  flex-direction: row;
  background: ${bg_main};
  align-items: center;
  padding: 0 10px;
  border-radius: 10px;
`;

const Search = styled.TextInput`
  flex: 1;
`;

const ResultBox = styled.ScrollView`
  flex: 1;
`;

export {ResultBox, Search, SearchBox, SearchView, Wrapper};
