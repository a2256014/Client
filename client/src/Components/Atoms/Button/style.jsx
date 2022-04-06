import styled from "styled-components";

export const Button = styled.button`
  margin-top: 5px;
  border-radius: 15px;
  width: 80%;
  height: 40px;
  font-size: 1.3rem;

  color: white;
  font-weight: 700;
  background: gray;
  border: 0px;
  cursor: pointer;
  transition: opacity 0.25s ease-out;
  :hover {
    opacity: 0.8;
  }
`;
export const ButtonGroup = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
