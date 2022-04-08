import styled from "styled-components";
import { css } from "../../../../node_modules/styled-components/dist/styled-components.cjs";

export const LogContainer = styled.table`
  color: white;
  width: 80%;
  align-items: center;
  border: 1px solid;
  margin-left: 85px;
`;

export const ListName = styled.div`
  border-bottom: 1px solid;
  padding: 5px;
  background-color: #808080;
  color: black;
`;

export const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  margin-top: 5px;
  border-bottom: 1px solid #eaeaea;
`;

export const LogData = styled.div`
  color: gray;
  display: flex;
  padding: 5px;
  border-bottom: 2px solid;
`;

export const DataInfo = styled.div`
  display: inline-flex;
  min-inline-size: 605px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShowImg = styled.button`
  color: white;
  cursor: pointer;
  font-size: 15px;
`;

export const Img = styled.img`
  max-width: 500px;
  max-height: 500px;

  position: relative;
  transition-duration: 1s;
  opacity: 5;

  animation: my 1s;

  @keyframes my {
    0% {
      width: 0%;
      height: 60%;
    }
    100% {
      width: 60%;
      height: 60%;
    }
  }
`;

export const Next = styled.a`
  justify-content: space-evenly;
  margin-right: 10px;
  margin-left: 5px;
  cursor: pointer;

  border-bottom: ${(probs) => probs.select === "true" && "1px solid"};
  color: ${(probs) => probs.select === "true" && "red"};
`;
export const Contain = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
`;

export const ToInfo = styled.button`
  color: aliceblue;
`;
