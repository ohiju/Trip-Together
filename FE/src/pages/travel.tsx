import React from 'react';
import {Text, Dimensions} from 'react-native';
import {Wrapper, IconView} from './TravelStyle';
import Plans from '../components/travel/Plans';
import Package from '../components/travel/Package';

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
        pages={PAGES}
        gap={15}
        offset={35}
        pageWidth={screenWidth - (16 + 36) * 4.7}
      />
    </Wrapper>
  );
}

export default Travel;
