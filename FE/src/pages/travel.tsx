import React from 'react';
import {Text, Dimensions} from 'react-native';
import {Wrapper, IconView} from './TravelStyle';
import Plans from '../components/Travel/Plans';
import Package from '../components/Travel/Package';

function Travel() {
  const screenWidth = Math.round(Dimensions.get('window').width);

  const PAGES = [
    {
      num: 1,
      color: '#86E3CE',
    },
    {
      num: 2,
      color: '#D0E6A5',
    },
    {
      num: 3,
      color: '#FFDD94',
    },
    {
      num: 4,
      color: '#FA897B',
    },
    {
      num: 5,
      color: '#CCABD8',
    },
  ];

  return (
    <Wrapper>
      <Plans />
      <IconView>
        <Text>1</Text>
      </IconView>
      <Package
        gap={15}
        offset={35}
        pages={PAGES}
        pageWidth={screenWidth - (16 + 36) * 5}
      />
    </Wrapper>
  );
}

export default Travel;
