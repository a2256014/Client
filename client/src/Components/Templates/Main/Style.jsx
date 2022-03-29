import styled from "styled-components";

export const VideoContainer = styled.div`
  width: 90%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 20px;
  column-gap: 20px;
  margin: auto;
  @media screen and (max-width: 900px) {
    height: 100vh;
    display: 80vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;
