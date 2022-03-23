import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import _Modal from "../../Molecules/Modal";
import { SERVER_URL, DEPLOYMENT_URL } from "../../../Common/Constant";

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
    } = await axios.get(`${DEPLOYMENT_URL}/log_${id}.json`);
    setLog(log);
  };

  useEffect(() => {
    getLogData(id);
  }, []);

  return (
    <div>
      <img src={log.url} alt="aaaa" />
      <_Modal log={log} />
    </div>
  );
};

export default InfoTemplate;
