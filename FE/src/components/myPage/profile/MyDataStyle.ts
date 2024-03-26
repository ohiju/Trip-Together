import {LineChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 5.5;
  background: ${bg_light};
  padding: 15px;
`;

const DataView = styled.View`
  flex: 1;
`;

const Data = styled(LineChart)`
  margin: 0 8px;
  border-radius: 16px;
`;

export {DataView, Wrapper};
