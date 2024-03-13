import styled from 'styled-components/native';

const BtnView = styled.View`
  width: 100%;
  align-items: center;
`;

const Btn = styled.Pressable`
  width: 80%;
  padding: 20px 0;
  border-radius: 40px;
  align-items: center;
`;

const BtnText = styled.Text<{$color: string}>`
  color: ${({$color}) => $color};
  font-size: 20px;
`;

export {Btn, BtnText, BtnView};
