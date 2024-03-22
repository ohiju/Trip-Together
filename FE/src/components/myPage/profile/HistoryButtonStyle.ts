import styled from 'styled-components/native';
import {bg_main} from '../../../constants/colors';

const Wrapper = styled.Pressable`
  flex: 1;
  background: ${bg_main};
  border-radius: 10px;
  padding: 15px 0 10px 10px;
  justify-content: space-between;
`;

const HistoryBtnImg = styled.Image`
  width: 40px;
  height: 40px;
`;

const HistoryBtnText = styled.Text`
  font-size: 20px;
`;

export {HistoryBtnImg, HistoryBtnText, Wrapper};
