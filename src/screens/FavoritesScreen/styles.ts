import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
`;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: #bbb;
  text-align: center;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 10px 14px;
  background-color: #e50914;
  border-radius: 6px;
  margin: 16px;
  align-self: flex-end;
  elevation: 3;
`;

export const ClearButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
`;
