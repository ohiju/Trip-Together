import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 2;
  width: 100%;
  background: blue;
`;

const Menus = () => {
  return (
    <Wrapper>
      <Text>Menus</Text>
    </Wrapper>
  );
};

export default Menus;
