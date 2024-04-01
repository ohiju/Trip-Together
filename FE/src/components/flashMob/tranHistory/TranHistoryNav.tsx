import React, {Dispatch, SetStateAction} from 'react';
import {NavHighlight, NavText, NavView, Wrapper} from './TranHistoryNavStyle';

interface TranHistoryNavProps {
  nav: number;
  setNav: Dispatch<SetStateAction<number>>;
}

const TranHistoryNav = ({nav, setNav}: TranHistoryNavProps) => {
  return (
    <Wrapper>
      <NavView onPress={() => setNav(0)}>
        <NavText>내 요청</NavText>
        {nav === 0 ? <NavHighlight /> : null}
      </NavView>
      <NavView onPress={() => setNav(1)}>
        <NavText>받은 요청</NavText>
        {nav === 1 ? <NavHighlight /> : null}
      </NavView>
    </Wrapper>
  );
};

export default TranHistoryNav;
