import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Page from '../../assets/data/Page';

interface ICarousel {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

const Container = styled.View`
  height: 40%;
  width: 90%;
  padding: 40px 0px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const Package = ({pages, pageWidth, gap, offset}: ICarousel) => {
  const renderItem = ({item}: any) => {
    return (
      <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
    );
  };

  return (
    <Container>
      {/* <Text>여행 상품 추천</Text> */}
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: (offset + gap / 2) / 4,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default Package;
