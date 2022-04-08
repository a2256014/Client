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

  font-size: 40px;
  transition: 0.5s;
  cursor: pointer;
`;

export const A = styled.div`
  align-items: center;
  border-bottom: ${(probs) => probs.id === "all" && "2px solid"};
  color: ${(probs) => probs.id === "all" && "red"};
`;

export const B = styled.div`
  align-items: center;
  border-bottom: ${(probs) => probs.id === "violence" && "2px solid"};
  color: ${(probs) => probs.id === "violence" && "red"};
`;

export const C = styled.div`
  align-items: center;
  border-bottom: ${(probs) => probs.id === "절도" && "2px solid"};
  color: ${(probs) => probs.id === "절도" && "red"};
`;

export const Naming = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  margin-left: 8px;
`;
