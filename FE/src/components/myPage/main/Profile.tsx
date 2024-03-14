import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background: yellow;
`;

const Profile = () => {
  return (
    <Wrapper>
      <Text>Profile</Text>
    </Wrapper>
  );
};

export default Profile;
