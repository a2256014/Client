import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogContainer = styled.table`
  color: white;
  width: 80%;
  align-items: center;
  border: 1px solid;
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
  justify-content: space-between;
  border-bottom: 2px solid;
`;

export const DataInfo = styled.div`
  display: inline-flex;
  min-inline-size: 605px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ShowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShowImg = styled.button`
  color: white;
  cursor: pointer;
  font-size: 15px;
  min-width: 100px;
`;

export const Img = styled.img`
  /* max-width: 500px;
  max-height: 500px; */
  width: 100%;
  height: 100%;
  position: relative;
  transition-duration: 1s;
  opacity: 5;
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
