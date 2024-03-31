import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import styled from 'styled-components/native';
import {bg_light} from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import getToken from '../../hooks/getToken';
import getFlag from '../../hooks/getFlag';

interface PlanDataProps {
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

const Container = styled.View`
  flex: 1;
  padding-top: 15px;
  background-color: ${bg_light};
`;

const PlanItemContainer = styled(TouchableOpacity)`
  border-radius: 10px;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-horizontal: 10px;
  margin-bottom: 10px;
  background-color: ${bg_light};
  elevation: 5;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.Text`
  width: 70px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #333;
`;

const PlanImage = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
`;

const DdayText = styled.Text`
  width: 45px;
  font-size: 15px;
  font-weight: 900;
  text-align: center;
  color: green;
`;

const Button = styled(TouchableOpacity)`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
`;

const PlaceImage = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

const AllTrip = () => {
  const [plansData, setPlansData] = useState<PlanDataProps[]>([]);
  useEffect(() => {
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
        setPlansData(response.data.data.plans);
      } catch (error) {
        // console.error('Error fetching plans:', error);
      }
    };

    fetchData();
  }, []);

  const calculateDday = (startAt: string, endAt: string) => {
    const startDate = new Date(startAt);
    const endDate = new Date(endAt);
    const diffTime = endDate.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const onPressTrash = async (id: number) => {
    const {access_token} = await getToken();

    try {
      await axios.delete(`https://j10a309.p.ssafy.io/api/plan/v1/plans/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setPlansData(prevPlansData =>
        prevPlansData.filter(plan => plan.plan_id !== id),
      );
    } catch (error) {
      // console.error('Error fetching plans:', error);
    }
  };

  const renderItem = ({item}: {item: PlanDataProps}) => (
    <PlanItemContainer>
      <PlanImage source={getFlag(item.nation)} />
      <Title>{item.start_region}</Title>
      <DdayText>
        {item.status === 'before'
          ? `D-${calculateDday(item.start_at, item.end_at)}`
          : item.status === 'in_progress'
          ? '진행중'
          : item.status === 'done'
          ? '완료'
          : ''}
      </DdayText>
      <Button onPress={() => onPressTrash(item.plan_id)}>
        <PlaceImage
          source={require('../../assets/images/trash.png')}
          resizeMode="cover"
        />
      </Button>
    </PlanItemContainer>
  );

  return (
    <Container>
      <FlatList
        data={plansData}
        renderItem={renderItem}
        keyExtractor={item => item.plan_id.toString()}
      />
    </Container>
  );
};

export default AllTrip;
