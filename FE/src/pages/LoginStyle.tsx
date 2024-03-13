import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

const LogoView = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.Image`
  height: 150px;
`;

const SloganView = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 80px;
`;

const Slogan = styled.Text`
  font-size: 20px;
`;

export {Logo, LogoView, Slogan, SloganView, Wrapper};
