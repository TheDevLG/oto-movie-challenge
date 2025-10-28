import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 12px 16px;
  align-items: center;
  margin: 6px 10px;
  background-color: #1e1e1e;
  border-radius: 10px;

  /* sombra leve (funciona no Android e iOS) */
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 6px;
`;

export const Small = styled.Text`
  font-size: 13px;
  color: #bbb;
  margin-bottom: 2px;
`;
