import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled(SafeAreaView)`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  position: relative;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  align-items: center;
  justify-content: flex-end;
`;

export {Container, Wrapper};
