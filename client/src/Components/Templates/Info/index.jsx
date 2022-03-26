import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import _Modal from "../../Molecules/Modal";
import {
  SERVER_URL,
  DEPLOYMENT_URL,
  ALERT_GET_URL,
} from "../../../Common/Constant";
import { ImgStyle, Container } from "./style";

const InfoTemplate = () => {
  const { id } = useParams();

  const [log, setLog] = useState({
    actionType: "",
    upper_leftx: 0,
    upper_lefty: 0,
    bottom_rightx: 0,
    bottom_right: 0,
    capture_file: { created_date: "", file_path: "" },
  });

  const getLogData = async (id) => {
    const {
      data: {
        emergency_type: { type_name_kor: actionType },
        upper_leftx,
        upper_lefty,
        bottom_rightx,
        bottom_righty,
        capture_file,
      },
    } = await axios.get(ALERT_GET_URL(id));

    console.log(await axios.get(ALERT_GET_URL(id)));
    setLog({
      actionType,
      upper_leftx,
      upper_lefty,
      bottom_rightx,
      bottom_righty,
      capture_file,
    });
  };
  console.log(log);
  useEffect(() => {
    getLogData(id);
  }, []);

  return (
    <Container>
      <ImgStyle src={log.capture_file.file_path} alt={log.actionType} />
      <_Modal log={log} />
    </Container>
  );
};

export default InfoTemplate;
