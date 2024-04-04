import styled from 'styled-components/native';
import {BtnProps, BtnTextProps} from '../../interfaces/styles/AppButton';

const BtnBox = styled.View`
  width: 100%;
  align-items: center;
`;

const Btn = styled.Pressable<BtnProps>`
  width: ${({$width}) => $width};
  padding: ${({$padding}) => $padding};
  border-color: ${({$borderC}) => $borderC};
  border-radius: ${({$borderR}) => $borderR};
  border-bottom-width: ${({$borderW}) => $borderW};
  border-top-width: ${({$borderW}) => $borderW};
  border-right-width: ${({$borderW}) => $borderW};
  border-left-width: ${({$borderW}) => $borderW};
  align-items: center;
`;

const BtnText = styled.Text<BtnTextProps>`
  color: ${({$color}) => $color};
  font-size: ${({$size}) => $size};
`;

export {Btn, BtnBox, BtnText};
