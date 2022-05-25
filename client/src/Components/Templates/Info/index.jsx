import { useLocation } from "react-router-dom";
import { ImgStyle, Container, InfoContainer, Info } from "./style";

const InfoTemplate = () => {
  const {
    state: { log },
  } = useLocation();
  console.log(log);
  return (
    <Container>
      <InfoContainer>
        <Info>{log.classroom.classroom_name}</Info>
        <Info>{log.capture_file.created_date.replace("T", " ")}</Info>
        <Info>{log.emergency_type.type_name_kor}</Info>
      </InfoContainer>
      <ImgStyle src={log.capture_file.file_path} />
    </Container>
  );
};

export default InfoTemplate;
