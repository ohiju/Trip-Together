import React, {Dispatch, SetStateAction} from 'react';
import {NavHighlight, NavText, NavView, Wrapper} from './ChatNavStyle';

interface ChatNav {
  nav: number;
  setNav: Dispatch<SetStateAction<number>>;
}

const ChatNav = ({nav, setNav}: ChatNav) => {
  return (
    <Wrapper>
      <NavView onPress={() => setNav(0)}>
        <NavText>참여 중</NavText>
        {nav === 0 ? <NavHighlight /> : null}
      </NavView>
      <NavView onPress={() => setNav(1)}>
        <NavText>대기 중</NavText>
        {nav === 1 ? <NavHighlight /> : null}
      </NavView>
    </Wrapper>
  );
};

export default ChatNav;
