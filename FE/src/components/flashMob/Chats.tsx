import React from 'react';
import styled from 'styled-components/native';
import chats from '../../assets/data/chats';
import InChat from './InChat';
import {bg_light} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${bg_light};
`;

const Chats = () => {
  return (
    <Wrapper>
      {chats.map(item => (
        <InChat item={item} />
      ))}
    </Wrapper>
  );
};

export default Chats;
