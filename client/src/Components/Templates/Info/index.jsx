import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

import _Modal from "../../Molecules/Modal";
import { ALERT_GET_URL } from "../../../Common/Constant";
import { AutoHeader } from "../../../Common/Util/AutoHeader/index";

import { ImgStyle, Container } from "./style";
import GetData from "../../../Common/Util/GetData/index";

const InfoTemplate = () => {
  // const { id } = useParams();
  // const [log, setLog] = useState({
  //   actionType: "",
  //   upper_leftx: 0,
  //   upper_lefty: 0,
  //   bottom_rightx: 0,
  //   bottom_right: 0,
  //   capture_file: { created_date: "", file_path: "", file_id: "" },
  // });

  // const getLogData = async (id) => {
  //   const {
  //     data: {
  //       emergency_type: { type_name_kor: actionType },
  //       upper_leftx,
  //       upper_lefty,
  //       bottom_rightx,
  //       bottom_righty,
  //       capture_file,
  //     },
  //   } = await axios.get(ALERT_GET_URL(id), {
  //     headers: AutoHeader(),
  //   });

  //   setLog({
  //     actionType,
  //     upper_leftx,
  //     upper_lefty,
  //     bottom_rightx,
  //     bottom_righty,
  //     capture_file,
  //   });
  // };
  // useEffect(() => {
  //   getLogData(id);
  // }, []);

  const {
    state: { log },
  } = useLocation();
  console.log(log.capture_file.file_path);
  // const user_id = localStorage.getItem("userid");
  // const _log = GetData(user_id);

  return (
    <Container>
      <ImgStyle src={log.capture_file.file_path} alt={log.emergency_type} />
    </Container>
  );
};

export default InfoTemplate;
