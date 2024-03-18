import React from 'react';
import {Text} from 'react-native';
import {imagePath} from '../../assets/images/imagePath';
import {
  ButtonText,
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
  return (
    <PlanView>
      <PlanTitle>오희주님의 프랑스 여행 계획</PlanTitle>
      <PlanCenter>
        <PlanSlideButton>
          <ButtonText>{'<'}</ButtonText>
        </PlanSlideButton>
        <PlanDescription>
          <PlanDescriptionBox>
            <PlanImage source={imagePath.France} />
            <Text>몽펠리에</Text>
          </PlanDescriptionBox>
          <PlanDescriptionBox>
            <Text>D-52</Text>
            <Text>총 12일</Text>
          </PlanDescriptionBox>
        </PlanDescription>
        <PlanSlideButton>
          <ButtonText>{'>'}</ButtonText>
        </PlanSlideButton>
      </PlanCenter>
      <PlanMoney>
        <Text>3,200,000</Text>
      </PlanMoney>
    </PlanView>
  );
};

export default Plans;
