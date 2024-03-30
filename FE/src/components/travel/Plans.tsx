import React, {useEffect, useState} from 'react';
import {imagePath} from '../../assets/images/imagePath';
import {WithLocalSvg} from 'react-native-svg/css';
import {iconPath} from '../../assets/icons/iconPath';
import {
  DdayText,
  DurationText,
  ButtonImage,
  MoneyImage,
  MoneyText,
  MoneyUnit,
  PlanCenter,
  PlanDescription,
  PlanDescriptionBox,
  PlanImage,
  PlanMoney,
  PlanSlideButton,
  PlanTitle,
  PlanView,
  CityName,
  AddWalletView,
  AddWallet,
  PlaceholderView,
  Placeholder,
  Wrapper,
} from './PlansStyle';
import axios from 'axios';

interface plansDataProps {
  plan_id: number;
  start_region: string;
  start_at: string;
  end_at: string;
  title: string;
  total_estimated_budget: number;
  total_budget: number;
  status: string;
}

const Plans = () => {
  const [now, setNow] = useState(0);
  const [plansData, setPlansData] = useState<plansDataProps[]>([]);

  useEffect(() => {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiY3JlYXRlZCI6MTcxMTYxMzc3MzMzMywiZXhwaXJlc0luIjoyNTkyMDAwMDAwLCJhdXRoIjoiQVVUSE9SSVRZIiwiZXhwIjoxNzE0MjA1NzczLCJpZCI6Mn0.X62ICtdzH9UzvGlkwWp1-_YxO-q0LqredwS48rXHjc4';

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://j10a309.p.ssafy.io/api/plan/v1/plans',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setPlansData(response.data.data);
      } catch (error) {
        // console.error('Error fetching plans:', error);
      }
    };

    fetchData();
  }, []);

  const handleLeftButtonClick = () => {
    setNow(prevNow => (prevNow === 0 ? plansData.length - 1 : prevNow - 1)); // Loop to the last plan if at the first plan
  };

  const handleRightButtonClick = () => {
    setNow(prevNow => (prevNow === plansData.length - 1 ? 0 : prevNow + 1)); // Loop to the first plan if at the last plan
  };

  const currentPlan = plansData[now];

  const startDate = new Date(currentPlan?.start_at);
  const endDate = new Date(currentPlan?.end_at);
  const durationInDays =
    Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    ) + 1;

  const myDate = new Date();
  const Dday = Math.floor(
    (startDate.getTime() - myDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (plansData.length === 0) {
    return (
      <Wrapper>
        <AddWalletView>
          <WithLocalSvg width={20} height={20} asset={iconPath.plus} />
          <AddWallet>계획 생성하기</AddWallet>
        </AddWalletView>
        <PlaceholderView>
          <Placeholder>여행을 떠나보세요!</Placeholder>
        </PlaceholderView>
      </Wrapper>
    );
  }

  return (
    <PlanView>
      <PlanTitle>{currentPlan.title}</PlanTitle>
      <PlanCenter>
        <PlanSlideButton onPress={handleLeftButtonClick}>
          <ButtonImage source={require('../../assets/images/left-arrow.png')} />
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={imagePath.France} />
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
          <ButtonImage
            source={require('../../assets/images/right-arrow.png')}
          />
        </PlanSlideButton>
      </PlanCenter>
      <PlanMoney>
        <MoneyImage source={require('../../assets/images/profits.png')} />
        <MoneyUnit>₩</MoneyUnit>
        <MoneyText>
          {currentPlan.total_estimated_budget.toLocaleString()}
        </MoneyText>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
