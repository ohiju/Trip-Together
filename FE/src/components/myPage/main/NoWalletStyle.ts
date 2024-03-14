import styled from 'styled-components/native';
import {bg_main, font_dark, font_lightgray} from '../../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px dashed black;
  border-radius: 10px;
  background: ${bg_main};
`;

const AddWalletView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

const AddWallet = styled.Text`
  color: ${font_dark};
  font-size: 20px;
  margin-left: 6px;
`;

const PlaceholderView = styled.Text``;

const Placeholder = styled.Text`
  color: ${font_lightgray};
  font-size: 10px;
`;

export {AddWallet, AddWalletView, Placeholder, PlaceholderView, Wrapper};
