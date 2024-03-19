import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
`;

const IconView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`;

const TermView = styled.View`
  flex-direction: row;
  margin: 20px 10px;
  align-items: center;
`;

const Term = styled.Text`
  flex: 1;
  font-size: 16px;
  margin-left: 5px;
`;

export {IconView, Term, TermView, Wrapper};
