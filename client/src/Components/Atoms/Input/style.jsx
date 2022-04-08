import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  background-color: black;
  height: 60px;
  -webkit-text-fill-color: gray;

  width: 80%;
  box-sizing: border-box;
  border: none;
  font-size: 1.3rem;
  box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
  transition: box-shadow 0.2s ease-in;
  :focus {
    box-shadow: inset 0px -3px 0px 0px darkcyan;
    outline: none;
  }
  ::-webkit-input-placeholder {
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  :hover::-webkit-input-placeholder,
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }

  ::placeholder {
    color: gray;
    font-size: 15px;
    text-align: left;
  }
`;

export const InputGroup = styled.button`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
`;
