import { SERVER_URL } from "../../../Common/Constant/index";
import { Container } from "./Style";

const VideoForm = () => {
  return (
    <Container>
      <video autoPlay muted controls width="100%" height="100%">
        <source src="./캡스톤디자인 피드백영상.mov"></source>
      </video>
    </Container>
  );
};

export default VideoForm;
