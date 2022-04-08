import styled from "styled-components";

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
  margin-top: 10px;

  border-bottom: 1px solid #eaeaea;
`;

export const LogData = styled.div`
  color: gray;
  display: flex;
  padding: 5px;
`;

export const ShowImg = styled.button`
  color: white;
  cursor: pointer;
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
`;
export const Contain = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
`;
