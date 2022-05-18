import { Container } from "./Style";

const VideoForm = (e) => {
  return (
    <Container>
      <video autoPlay muted controls width="100%" height="100%">
        <source src={e.path}></source>
      </video>
    </Container>
  );
};

export default VideoForm;
