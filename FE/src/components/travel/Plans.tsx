import React, {useState} from 'react';
import plans from '../../assets/data/alltrips';
import {imagePath} from '../../assets/images/imagePath';
import {
  ButtonImage,
  CityName,
  DdayText,
  DurationText,
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
} from './PlansStyle';

const Plans = () => {
  const [now, setNow] = useState(0);

  const handleLeftButtonClick = () => {
    setNow(prevNow => (prevNow === 0 ? plans.length - 1 : prevNow - 1)); // Loop to the last plan if at the first plan
  };

  const handleRightButtonClick = () => {
    setNow(prevNow => (prevNow === plans.length - 1 ? 0 : prevNow + 1)); // Loop to the first plan if at the last plan
  };

  const currentPlan = plans[now];

  return (
    <PlanView>
      <PlanTitle>{currentPlan.title}</PlanTitle>
      <PlanCenter>
        <PlanSlideButton onPress={handleLeftButtonClick}>
          <ButtonImage source={imagePath.leftarrow} />
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={imagePath.francesquare} />
            <CityName>{currentPlan.start_region}</CityName>
          </PlanDescriptionBox>
          <PlanDescriptionBox>
            <DdayText>D-52</DdayText>
            <DurationText>총 12일</DurationText>
          </PlanDescriptionBox>
        </PlanDescription>
        <PlanSlideButton onPress={handleRightButtonClick}>
          <ButtonImage source={imagePath.rightarrow} />
        </PlanSlideButton>
      </PlanCenter>
      <PlanMoney>
        <MoneyImage source={imagePath.profits} />
        <MoneyUnit>₩</MoneyUnit>
        <MoneyText>{currentPlan.total_budget.toLocaleString()}</MoneyText>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
