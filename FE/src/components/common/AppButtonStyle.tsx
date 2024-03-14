import styled from 'styled-components/native';
import {BtnProps, BtnTextProps} from '../../interfaces/styles/AppButton';

const BtnView = styled.View`
  width: 100%;
  align-items: center;
`;

const Btn = styled.Pressable<BtnProps>`
  width: ${({$width}) => $width};
  padding: ${({$padding}) => $padding};
  border-radius: ${({$borderR}) => $borderR};
  align-items: center;
`;

const BtnText = styled.Text<BtnTextProps>`
  color: ${({$color}) => $color};
  font-size: ${({$size}) => $size};
`;

export {Btn, BtnText, BtnView};
