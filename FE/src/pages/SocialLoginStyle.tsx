import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #d2d1fc;
`;

const LogoView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const LogoText = styled.Text`
  font-style: italic;
  font-weight: 600;
  font-size: 40px;
`;

const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  background: transparent;
  border-bottom-width: 1px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput``;

export {Input, InputView, Logo, LogoText, LogoView, Wrapper};
