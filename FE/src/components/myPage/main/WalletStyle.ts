import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

const WalletBox = styled.View`
  flex: 1;
  width: 100%;
  background: ${bg_light};
  border-radius: 10px;
  padding: 15px;
`;

export {WalletBox, Wrapper};
