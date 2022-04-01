import styled from "styled-components";

export const UpForm = styled.div`
  align-items: center;
  max-width: 500px;
  min-width: 300px;
  max-height: 700px;
  width: 450px;
  height: 500px;
  margin: 100px auto;
  background-color: gray;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.div`
  font-family: "open sans", sans-serif;
  padding-top: 20px;
  margin: 0;
  font-size: 7rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  background-color: gray;
  height: 60px;

  text-align: left;
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
`;

export const Button = styled.button`
  margin-top: 100px;

  border-radius: 25px;
  width: 80%;
  height: 40px;
  font-size: 1.3rem;
  color: white;
  font-weight: 700;
  background: linear-gradient(90deg, #949797 0%, #31302e 100%);
  border: 0px;
  cursor: pointer;
  transition: opacity 0.25s ease-out;
  :hover {
    opacity: 0.8;
  }
`;
