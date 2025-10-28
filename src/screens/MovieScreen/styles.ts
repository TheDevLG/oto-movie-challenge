import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 380px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
`;

export const Small = styled.Text`
  font-size: 14px;
  margin-top: 6px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 12px;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  background-color: #007bff;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;