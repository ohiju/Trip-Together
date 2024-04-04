import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Animated, Dimensions, Easing, Platform, StyleSheet} from 'react-native';
import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {imagePath} from '../../assets/images/imagePath';
import getCurrency from '../../hooks/getCurrency';
import {BagItem} from '../../interfaces/states/BagState';
import {RootState} from '../../store';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addItemToBag, deleteItemFromBag} from '../../store/slices/bag';
import {
  addDailyPlan,
  attractionProp,
  deleteDailyPlan,
  setTotalBudget,
} from '../../store/slices/trip';
import {
  Button,
  Container,
  DragBar,
  FirstHalf,
  Image,
  InfoContainer,
  List,
  Middle,
  MiddlePrice,
  MiddleTitle,
  Name,
  PlaceImage,
  Price,
  Rating,
  RatingContainer,
  SecondHalf,
} from './PlanDayStyle';

const window = Dimensions.get('window');

interface SortableDataItem {
  attraction_id: number;
  thumbnail_image_url: string;
  name: string;
  address: string;
  avg_rating: string;
  avg_price: string;
}

interface SortableDownDataItem {
  attraction_id: number;
  thumbnail_image_url: string;
  name: string;
  address: string;
  avg_rating: string;
  avg_price: string;
}

function Row(props: any) {
  const {active, data, UporDown, onPressUp, onPressDown, onPressTrash} = props;
  const nation = useAppSelector(state => state.trip.tripInfo.nation);

  const activeAnim = useRef(new Animated.Value(0));

  const style = useMemo(
    () => ({
      ...Platform.select({
        android: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    }),
    [],
  );

  useEffect(() => {
    Animated.timing(activeAnim.current, {
      duration: 300,
      easing: Easing.bounce,
      toValue: Number(active),
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <Animated.View style={[styles.row, style]}>
      <PlaceImage source={imagePath.drag} resizeMode="cover" />
      <Image source={{uri: data.thumbnail_image_url}} resizeMode="cover" />
      <InfoContainer>
        <Name>{data.attraction_name}</Name>
        <RatingContainer>
          <Rating>{`${data.avg_rating}`}</Rating>
          <StarRatingDisplay rating={4.9} starSize={12} />
        </RatingContainer>
        <Price>{`평균 가격: ${getCurrency(nation)} ${data.avg_price}`}</Price>
      </InfoContainer>
      {UporDown === 'up' ? (
        <Button onPress={() => onPressDown(data)}>
          <PlaceImage source={imagePath.godown} resizeMode="cover" />
        </Button>
      ) : (
        <Button onPress={() => onPressUp(data)}>
          <PlaceImage source={imagePath.goup} resizeMode="cover" />
        </Button>
      )}
      {UporDown === 'up' ? (
        <Button onPress={() => onPressTrash(data)}>
          <PlaceImage source={imagePath.trash} resizeMode="cover" />
        </Button>
      ) : (
        <Button onPress={() => onPressTrash(data)}>
          <PlaceImage source={imagePath.trash} resizeMode="cover" />
        </Button>
      )}
    </Animated.View>
  );
}

interface DailyPlan {
  attractions: any[];
  order: number;
  daily_estimated_budget: number;
}

interface PlanDayProps {
  dailyPlan: DailyPlan;
}

const PlanDay = ({dailyPlan}: PlanDayProps) => {
  const topList = dailyPlan.attractions;
  const today = dailyPlan.order;
  const bottomList = useAppSelector((state: RootState) => state.bag.bagInfo);
  const dispatch = useAppDispatch();
  const nation = useAppSelector(state => state.trip.tripInfo.nation);

  const singleDayTotalPrice = topList.reduce((total, attraction) => {
    return total + parseFloat(attraction.avg_price).toFixed(2);
  }, 0);

  const allDaysTotalPrice = useAppSelector((state: RootState) => {
    return state.trip.tripInfo.daily_plans.reduce((total, day) => {
      const result = day.attractions.reduce((dayTotal, attraction) => {
        return dayTotal + parseFloat(attraction.avg_price);
      }, 0);

      return total + result;
    }, 0);
  });

  useEffect(() => {
    dispatch(setTotalBudget(allDaysTotalPrice));
  }, [allDaysTotalPrice, dispatch]);

  const handleRowPress = useCallback(
    (row: attractionProp & BagItem, action: string) => {
      if (action === 'up') {
        dispatch(addDailyPlan({order: today, attraction: row}));
        dispatch(deleteItemFromBag(row.attraction_id));
      } else if (action === 'down') {
        dispatch(
          deleteDailyPlan({order: today, attraction_id: row.attraction_id}),
        );
        dispatch(addItemToBag(row));
      }
    },
    [],
  );

  const handleTrashPress = useCallback(
    (row: attractionProp & BagItem, action: string) => {
      if (action === 'down') {
        dispatch(deleteItemFromBag(row.attraction_id));
      } else if (action === 'up') {
        dispatch(
          deleteDailyPlan({order: today, attraction_id: row.attraction_id}),
        );
      }
    },
    [],
  );

  const renderRowUp = useCallback(({data, active}: any) => {
    return (
      <Row
        data={data}
        active={active}
        UporDown="up"
        onPressDown={(row: typeof data) => handleRowPress(row, 'down')}
        onPressTrash={(row: typeof data) => handleTrashPress(row, 'up')}
      />
    );
  }, []);

  const renderRowDown = useCallback(({data, active}: any) => {
    return (
      <Row
        data={data}
        active={active}
        UporDown="down"
        onPressUp={(row: typeof data) => handleRowPress(row, 'up')}
        onPressTrash={(row: typeof data) => handleTrashPress(row, 'down')}
      />
    );
  }, []);

  const sortableUpData: {[key: number]: SortableDataItem} = topList.reduce(
    (acc, place, index) => {
      acc[index] = {...place, id: index};
      return acc;
    },
    {} as {[key: number]: SortableDataItem},
  );

  const sortableDownData: {[key: number]: SortableDownDataItem} =
    bottomList.reduce((acc, place, index) => {
      acc[index] = {...place, id: index};
      return acc;
    }, {} as {[key: number]: SortableDownDataItem});

  return (
    <Container>
      <FirstHalf>
        <List
          data={sortableUpData}
          contentContainerStyle={styles.contentContainer}
          renderRow={renderRowUp}
        />
      </FirstHalf>
      <Middle>
        <MiddleTitle>일 예산</MiddleTitle>
        <MiddlePrice>
          {getCurrency(nation)}
          {singleDayTotalPrice}
        </MiddlePrice>
        <MiddleTitle>총 예산</MiddleTitle>
        <MiddlePrice>
          {getCurrency(nation)}
          {singleDayTotalPrice}
        </MiddlePrice>
      </Middle>
      <SecondHalf>
        <List
          contentContainerStyle={styles.contentContainer}
          data={sortableDownData}
          renderRow={renderRowDown}
        />
        <DragBar />
      </SecondHalf>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    width: window.width,
    ...Platform.select({
      android: {
        paddingHorizontal: 0,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 9,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default PlanDay;
