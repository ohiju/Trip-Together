import {PieChart} from 'react-native-chart-kit';
import styled from 'styled-components/native';
import {bg_light} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 5.5;
  background: ${bg_light};
  padding: 15px;
`;

const TitleView = styled.View`
  margin-bottom: 15px;
`;

const DataView = styled.View`
  flex: 1;
`;

const Data = styled(PieChart)``;

export {Data, DataView, TitleView, Wrapper};
