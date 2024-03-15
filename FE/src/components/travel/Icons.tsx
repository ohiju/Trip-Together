import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Page from '../../assets/data/MainIcons.tsx';
import {primary, bg_lightgray} from '../../constants/colors.ts';

interface ICarousel {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

const Container = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px 10px;
  padding: 10px 0px;
`;

const Indicator = styled.View<{focused: boolean}>`
  margin: 0px 4px;
  background-color: ${props => (props.focused ? primary : bg_lightgray)};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const Icons = ({pages, pageWidth, gap, offset}: ICarousel) => {
  const [page, setPage] = useState(0);

  function renderItem({item}: any) {
    return (
      <Page item={item} style={{width: pageWidth, marginHorizontal: gap / 2}} />
    );
  }

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: (offset + gap / 2) / 4,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default Icons;
