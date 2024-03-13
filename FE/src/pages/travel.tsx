import React from 'react';
import {Text} from 'react-native';
import {Wrapper, RecommendView, IconView} from './TravelStyle';
import Plans from '../components/Travel/Plans';

function Travel() {
  return (
    <Wrapper>
      <Plans />
      <IconView>
        <Text>1</Text>
      </IconView>
      <RecommendView>
        <Text>1</Text>
      </RecommendView>
    </Wrapper>
  );
}

export default Travel;
