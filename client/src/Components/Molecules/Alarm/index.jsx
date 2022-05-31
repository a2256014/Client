import {
  Alarm,
  AlarmItem,
  AlarmList,
  AlarmListContainer,
  Container,
  Count,
} from "./style";
import { RiAlarmWarningLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { ALERT_GET_URL } from "../../../Common/Constant/index";
import axios from "../../../../node_modules/axios/index";
import { AutoHeader } from "../../../Common/Util/AutoHeader/index";
import { useNavigate } from "../../../../node_modules/react-router-dom/index";

const AlarmC = ({ alarmData, setAlarmData }) => {
  const [showAlarm, setShowAlarm] = useState(false);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    alarmData.map(async (id) => {
      const response = await axios
        .get(ALERT_GET_URL(id), {
          headers: AutoHeader(),
        })
        .catch((error) => {
          if (error.response.status === 500 || error.response.status === 400) {
            console.log("잘못된 id로 요청");
          }
        });
      let same = true;
      for (const datas of data) {
        if (datas.alert_log_id === response.data.alert_log_id) same = false;
      }
      if (same) setData([...data, response.data]);
    });
  }, [alarmData]);
  const onclick = () => {
    setShowAlarm(!showAlarm);
  };
  const OutsideClick = () => {
    if (showAlarm) {
      setShowAlarm(false);
    }
  };
  const infoClick = (e) => {
    const selectId = e.target.closest(".List").dataset.id;
    const log = data.filter(
      (datas) => datas.capture_file.file_id + "" === selectId
    )[0];
    const alertId = log.alert_log_id;
    nav(`/info/${selectId}`, { state: { log } });
    setAlarmData(alarmData.filter((data) => data !== alertId + ""));
    setData(data.filter((datas) => datas.alert_log_id !== alertId));
  };

  useEffect(() => {
    document.addEventListener("click", OutsideClick);
    return () => {
      document.removeEventListener("click", OutsideClick);
    };
  });
  return (
    <Container>
      <Alarm onClick={onclick}>
        <Count>{data.length}</Count>
        <RiAlarmWarningLine />
      </Alarm>
      {showAlarm ? (
        <AlarmListContainer>
          {data.map((item) => {
            return (
              <AlarmList
                key={item.alert_log_id}
                className="List"
                onClick={infoClick}
                data-id={item.capture_file.file_id}
              >
                <AlarmItem>{item.alert_log_id}</AlarmItem>
                <AlarmItem>
                  {item.capture_file.created_date.replace("T", " ")}
                </AlarmItem>
                <AlarmItem>{item.emergency_type.type_name_kor}</AlarmItem>
              </AlarmList>
            );
          })}
        </AlarmListContainer>
      ) : null}
    </Container>
  );
};

export default AlarmC;
