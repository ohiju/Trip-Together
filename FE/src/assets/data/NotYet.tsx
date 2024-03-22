import React from 'react';
import styled from 'styled-components/native';
import {bg_light} from '../../constants/colors';

const Wrapper = styled.View`
  flex: 1;
  background: ${bg_light};
  align-items: center;
  justify-content: center;
`;

const Noti = styled.Text``;

const NotYet = () => {
  return (
    <Wrapper>
      <Noti>페이지 준비 중 입니다...</Noti>
    </Wrapper>
  );
};

export default NotYet;
