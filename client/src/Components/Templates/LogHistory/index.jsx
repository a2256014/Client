import { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowFromBottom } from "react-icons/bi";
import LogHeader from "../../Organisms/LogHeader/index";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/index";

import {
  Contain,
  Container,
  DataInfo,
  Img,
  ListGroup,
  ListItem,
  ListName,
  LogContainer,
  LogData,
  Next,
  ShowContainer,
  ShowImg,
  ToInfo,
  VideoContainer,
} from "./style";
import { LOG_GET_URL } from "../../../Common/Constant/index";
import useGetData from "../../../Common/Hook/useGetData";

const LogTemplate = () => {
  const param = useParams();
  const nav = useNavigate();
  const [filterData, setFilterData] = useState([]);
  const [show, setShow] = useState("");
  const [videoShow, setVideoShow] = useState("");
  const data = useGetData(LOG_GET_URL(param.id));

  const onclick = (e) => {
    if (show === e.currentTarget.id) {
      setShow("");
    } else {
      if (videoShow === e.currentTarget.id) setVideoShow("");
      setShow(e.currentTarget.id);
    }
  };

  const videoClick = (e) => {
    if (videoShow === e.currentTarget.id) {
      setVideoShow("");
    } else {
      if (show === e.currentTarget.id) setShow("");
      setVideoShow(e.currentTarget.id);
    }
  };

  const onclick2 = (e) => {
    nav(`/log/${param.type}/${e.currentTarget.id}`);
  };

  const CountPage = () => {
    let a = [];
    for (let i = 0; i < data.last_page; i++) {
      if (param.id === i + "") {
        a.push(
          <Next id={i} select="true" onClick={onclick2}>
            {i + 1}
          </Next>
        );
      } else {
        a.push(
          <Next id={i} select="false" onClick={onclick2}>
            {i + 1}
          </Next>
        );
      }
    }
    return a;
  };

  useEffect(() => {
    if (data.data === undefined) return;
    if (param.type === "all") {
      setFilterData(data.data.filter((data) => data.capture_file));
    } else {
      setFilterData(
        data.data.filter(
          (data) =>
            (data.emergency_type.type_name_eng === param.type ||
              data.emergency_type.type_name_kor === param.type) &&
            data.capture_file
        )
      );
    }
    console.log(data.data);
  }, [param, data]);

  return (
    <>
      <LogHeader />
      <Container>
        <LogContainer>
          <ListGroup>
            <ListName>
              학급&nbsp;&nbsp;
              종류&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              시간
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              파일
            </ListName>
            {filterData.map((log) => {
              return (
                <>
                  <ListItem>
                    <LogData>
                      <DataInfo id={log.alert_log_id}>
                        {`${log.classroom.classroom_id}반`}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {log.emergency_type.type_name_kor}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {log.capture_file.created_date.replace("T", " ")}
                      </DataInfo>
                      <ShowContainer>
                        {videoShow === log.alert_log_id + "" ? (
                          <>
                            <ShowImg id={log.alert_log_id} onClick={videoClick}>
                              비디오 접기
                              <BiArrowFromBottom />
                            </ShowImg>
                          </>
                        ) : (
                          <ShowImg id={log.alert_log_id} onClick={videoClick}>
                            비디오 보기
                            <BiArrowToBottom />
                          </ShowImg>
                        )}
                        {show === log.alert_log_id + "" ? (
                          <>
                            <ShowImg id={log.alert_log_id} onClick={onclick}>
                              사진 접기
                              <BiArrowFromBottom />
                            </ShowImg>
                          </>
                        ) : (
                          <ShowImg id={log.alert_log_id} onClick={onclick}>
                            사진 보기
                            <BiArrowToBottom />
                          </ShowImg>
                        )}
                      </ShowContainer>
                    </LogData>
                    {show === log.alert_log_id + "" && (
                      <div>
                        <Img src={log.capture_file.file_path} />
                      </div>
                    )}
                    {videoShow === log.alert_log_id + "" && (
                      <div>
                        <VideoContainer>
                          <video
                            src={log.video_file.file_path}
                            autoplay
                            muted
                          />
                        </VideoContainer>
                        <ToInfo id={log.alert_log_id}></ToInfo>
                      </div>
                    )}
                  </ListItem>
                </>
              );
            })}
            <Contain>{CountPage()}</Contain>
          </ListGroup>
        </LogContainer>
      </Container>
    </>
  );
};

export default LogTemplate;
