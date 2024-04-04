import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 2;
  background: ${bg_light};
  padding: 5px 15px;
`;

const TermView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TermLeftView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TermText = styled.Text`
  margin-left: 3px;
  font-size: 15px;
`;

export {TermLeftView, TermText, TermView, Wrapper};
