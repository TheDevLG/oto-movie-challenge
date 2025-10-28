import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #121212;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 380px;
  border-radius: 12px;
  background-color: #222;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #f5f5f5;
  margin-top: 16px;
  margin-bottom: 6px;
`;

export const Small = styled.Text`
  font-size: 14px;
  color: #bbb;
  margin-top: 6px;
  line-height: 20px;
`;

export const Button = styled.TouchableOpacity<{ isFav: boolean }>`
  margin-top: 18px;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  background-color: ${({ isFav }) => (isFav ? "#444" : "#e50914")};
  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;
