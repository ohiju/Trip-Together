import React from 'react';
import {Placeholder, PlaceholderView, Wrapper} from './NoAccountStyle';

const NoAccount = () => {
  return (
    <Wrapper>
      <PlaceholderView>
        <Placeholder>아직 환전된 외화가 없습니다.</Placeholder>
      </PlaceholderView>
    </Wrapper>
  );
};

export default NoAccount;
