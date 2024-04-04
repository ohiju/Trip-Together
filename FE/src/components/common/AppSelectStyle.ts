import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  padding: 15px;
`;

const SelectView = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  min-height: 50px;
  padding: 10px;
`;

const Unselected = styled.Text`
  font-size: 18px;
`;

const Selected = styled.View`
  flex: 1;
`;

const Options = styled.ScrollView`
  margin: 10px 0;
`;

const Option = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export {Option, Options, SelectView, Selected, Unselected, Wrapper};
