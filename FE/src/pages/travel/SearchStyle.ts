import styled from 'styled-components/native';
import {bg_main, bg_light} from '../../constants/colors';

const Wrapper = styled.View`
  background-color: ${bg_light};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  background-color: ${bg_main};
  width: 80%;
  padding: 1px 15px;
  height: 40px;
  border-radius: 20px;
  margin-bottom: 300px;
`;

export {Wrapper, SearchInput};
