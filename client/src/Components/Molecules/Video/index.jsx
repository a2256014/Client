import { Container } from "./Style";

const VideoForm = () => {
  return (
    <Container>
      <video autoPlay muted controls width="90%" height="90%">
        <source src="./캡스톤디자인 피드백영상.mov"></source>
      </video>
    </Container>
  );
};

export default VideoForm;
