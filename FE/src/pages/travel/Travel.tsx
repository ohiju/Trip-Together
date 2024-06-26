import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {ICONS} from '../../assets/data/icons';
import {PAGES} from '../../assets/data/pages';
import Icons from '../../components/travel/Icons';
import Package from '../../components/travel/Package';
import Plans from '../../components/travel/Plans';
import {useAppDispatch} from '../../store/hooks';
import {setDisplay} from '../../store/slices/tabState';
import {Wrapper} from './TravelStyle';

function Travel() {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    dispatch(setDisplay(true));
  });

  return (
    <Wrapper>
      <Plans />
      <Icons pages={ICONS} gap={25} offset={35} pageWidth={screenWidth - 51} />
      <Package
        pages={PAGES}
        gap={15}
        offset={35}
        pageWidth={screenWidth - (10 + 36) * 4.7}
      />
    </Wrapper>
  );
}

export default Travel;
