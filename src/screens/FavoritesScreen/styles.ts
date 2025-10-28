import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 8px 12px;
  background-color: #c0392b;
  border-radius: 6px;
  margin: 12px;
  align-self: flex-end;
`;