import React, {useCallback, useState} from 'react';
import {imagePath} from '../../assets/images/imagePath';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../assets/icons/iconPath';
import {
  PlanView,
  PlanTitle,
  PlanCenter,
  PlanSlideButton,
  ButtonImage,
  DdayText,
  DurationText,
  CityName,
  PlanDescription,
  PlanDescriptionBox,
  PlanImage,
  PlanMoney,
  MoneyImage,
  MoneyUnit,
  MoneyText,
  Wrapper,
  AddWalletView,
  AddWallet,
  PlaceholderView,
  Placeholder,
} from './PlansStyle';
import axios from 'axios';
import {
  NavigationProp,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {TravelStackParams} from '../../interfaces/router/TripStackParams';
import {setModify} from '../../store/slices/trip';
import {useAppDispatch} from '../../store/hooks';
import getToken from '../../hooks/getToken';
import getFlag from '../../hooks/getFlag';
import getCurrency from '../../hooks/getCurrency';

interface plansDataProps {
  plan_id: number;
  start_region: string;
  start_at: string;
  end_at: string;
  title: string;
  total_estimated_budget: number;
  total_budget: number;
  status: string;
  nation: string;
}

const Plans = () => {
  const [now, setNow] = useState(0);
  const [plansData, setPlansData] = useState<plansDataProps[]>([]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<TravelStackParams>>();

  const fetchData = async () => {
    const {access_token} = await getToken();

    try {
      const response = await axios.get(
        'https://j10a309.p.ssafy.io/api/plan/v1/plans',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      if (response.data.data.plans !== null) {
        setPlansData(response.data.data.plans);
      }
    } catch (error) {
      // console.error('Error fetching plans:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const handleLeftButtonClick = () => {
    setNow(prevNow => (prevNow === 0 ? plansData.length - 1 : prevNow - 1)); // Loop to the last plan if at the first plan
  };

  const handleRightButtonClick = () => {
    setNow(prevNow => (prevNow === plansData.length - 1 ? 0 : prevNow + 1)); // Loop to the first plan if at the last plan
  };

  const handlePressTrip = () => {
    navigation.navigate('planning');
  };

  const handleModifyPlan = async () => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiY3JlYXRlZCI6MTcxMTYxMzc3MzMzMywiZXhwaXJlc0luIjoyNTkyMDAwMDAwLCJhdXRoIjoiQVVUSE9SSVRZIiwiZXhwIjoxNzE0MjA1NzczLCJpZCI6Mn0.X62ICtdzH9UzvGlkwWp1-_YxO-q0LqredwS48rXHjc4';

    try {
      const response = await axios.get(
        `https://j10a309.p.ssafy.io/api/plan/v1/plans/${plansData[now]?.plan_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data.data);
      dispatch(setModify(response.data.data));
    } catch (error) {
      // console.error('Error fetching plans:', error);
    }

    navigation.navigate('plandetail');
  };

  const currentPlan = plansData[now];

  const startDate = new Date(currentPlan?.start_at);
  const endDate = new Date(currentPlan?.end_at);
  const durationInDays =
    Math.abs(
      Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
      ),
    ) + 1;

  const myDate = new Date();
  const Dday = Math.floor(
    (startDate.getTime() - myDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (plansData.length === 0) {
    return (
      <PlanView>
        <Wrapper onPress={handlePressTrip}>
          <AddWalletView>
            <WithLocalSvg width={20} height={20} asset={iconPath.plus} />
            <AddWallet>계획 생성하기</AddWallet>
          </AddWalletView>
          <PlaceholderView>
            <Placeholder>여행을 떠나보세요!</Placeholder>
          </PlaceholderView>
        </Wrapper>
      </PlanView>
    );
  }

  return (
    <PlanView onPress={handleModifyPlan}>
      <PlanTitle>{currentPlan.title}</PlanTitle>
      <PlanCenter>
        <PlanSlideButton onPress={handleLeftButtonClick}>
          <ButtonImage source={imagePath.leftarrow} />
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={getFlag(currentPlan.nation)} />
            <CityName>{currentPlan.start_region}</CityName>
          </PlanDescriptionBox>
          <PlanDescriptionBox>
            <DdayText>
              {currentPlan.status === 'before'
                ? `D-${Dday}`
                : currentPlan.status === 'in_progress'
                ? '진행중'
                : currentPlan.status === 'done'
                ? '완료'
                : ''}
            </DdayText>
            <DurationText>총 {durationInDays}일</DurationText>
          </PlanDescriptionBox>
        </PlanDescription>
        <PlanSlideButton onPress={handleRightButtonClick}>
          <ButtonImage source={imagePath.rightarrow} />
        </PlanSlideButton>
      </PlanCenter>
      <PlanMoney>
        <MoneyImage source={imagePath.profits} />
        <MoneyUnit>{getCurrency(currentPlan.nation)}</MoneyUnit>
        <MoneyText>
          {currentPlan.total_estimated_budget.toLocaleString()}
        </MoneyText>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
