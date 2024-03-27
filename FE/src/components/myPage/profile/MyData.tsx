import React, {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';
import {myData, myDataConfig} from '../../../assets/data/myData';
import {Title} from '../../common/InfoPageStyle';
import {Data, DataView, TitleView, Wrapper} from './MyDataStyle';

const MyData = () => {
  const [viewLayout, setViewLayout] = useState({width: 0, height: 0});
  const onViewLayout = (e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    setViewLayout({width, height});
  };

  return (
    <Wrapper>
      <TitleView>
        <Title>마이 페이지</Title>
      </TitleView>
      <DataView onLayout={onViewLayout}>
        <Data
          data={myData}
          width={viewLayout.width}
          height={viewLayout.height}
          chartConfig={myDataConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </DataView>
    </Wrapper>
  );
};

export default MyData;
