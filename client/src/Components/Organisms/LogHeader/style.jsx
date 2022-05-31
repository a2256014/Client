import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-bottom: 20px;
`;

export const Icons = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;

  font-size: 40px;
  transition: 0.5s;
  cursor: pointer;

  border-bottom: ${(probs) => probs.select && "2px solid"};
  color: ${(probs) => probs.select && "red"};
`;

export const Naming = styled.div`
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
