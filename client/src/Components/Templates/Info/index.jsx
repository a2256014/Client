import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import _Modal from "../../Molecules/Modal";
import { SERVER_URL, DEPLOYMENT_URL } from "../../../Common/Constant";
import { ImgStyle } from "./style";

const InfoTemplate = () => {
  const { id } = useParams();

  const [log, setLog] = useState({
    time: "",
    actionType: "",
    url: "",
  });

  const getLogData = async (id) => {
    const {
      data: { log },
    } = await axios.get(`${SERVER_URL}/log_${id}.json`);
    setLog(log);
  };

  useEffect(() => {
    getLogData(id);
  }, []);

  return (
    <div>
      <ImgStyle src={log.url} alt={log.actionType} />

      <_Modal log={log} />
    </div>
  );
};

export default InfoTemplate;
