import React from 'react';
import {
  PlanView,
  PlanTitle,
  PlanCenter,
  PlanSlideButton,
  PlanDescription,
  ButtonText,
  PlanMoney,
  StartCityText,
  DdayText,
  DurationText,
  PlanDescriptionBox,
  PlanImage,
  MoneyImage,
  MoneyUnit,
  MoneyText,
} from './PlansStyle';

const Plans = () => {
  return (
    <PlanView>
      <PlanTitle>오희주님의 프랑스 여행 계획</PlanTitle>
      <PlanCenter>
        <PlanSlideButton>
          <ButtonText>{'<'}</ButtonText>
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={require('../../assets/images/France.png')} />
            <StartCityText>몽펠리에</StartCityText>
          </PlanDescriptionBox>
          <PlanDescriptionBox>
            <DdayText>D-52</DdayText>
            <DurationText>총 12일</DurationText>
          </PlanDescriptionBox>
        </PlanDescription>
        <PlanSlideButton>
          <ButtonText>{'>'}</ButtonText>
        </PlanSlideButton>
      </PlanCenter>
      <PlanMoney>
        <MoneyImage source={require('../../assets/images/money.png')} />
        <MoneyUnit>₩</MoneyUnit>
        <MoneyText>3,200,000</MoneyText>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
