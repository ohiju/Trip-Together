import React, {useState} from 'react';
import {imagePath} from '../../assets/images/imagePath';
import plans from '../../assets/data/alltrips';
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
          <ButtonImage source={require('../../assets/images/left-arrow.png')} />
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={imagePath.France} />
            <CityName>{currentPlan.start_region}</CityName>
          </PlanDescriptionBox>
          <PlanDescriptionBox>
            <DdayText>D-52</DdayText>
            <DurationText>총 12일</DurationText>
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
        <MoneyText>{currentPlan.total_budget.toLocaleString()}</MoneyText>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
