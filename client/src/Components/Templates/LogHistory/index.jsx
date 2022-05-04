import { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowFromBottom } from "react-icons/bi";

import LogHeader from "../../Organisms/LogHeader/index";
import {
  useNavigate,
  useParams,
} from "../../../../node_modules/react-router-dom/index";

import {
  Contain,
  DataInfo,
  Img,
  ListGroup,
  ListItem,
  ListName,
  LogContainer,
  LogData,
  Next,
  ShowImg,
  ToInfo,
} from "./style";
import { LOG_GET_URL } from "../../../Common/Constant/index";
import useGetData from "../../../Common/Hook/useGetData";

const LogTemplate = () => {
  const param = useParams();
  const nav = useNavigate();
  const [filterData, setFilterData] = useState([]);
  const [show, setShow] = useState("");

  const data = useGetData(LOG_GET_URL(param.id));

  const onclick = (e) => {
    if (show == e.currentTarget.id) {
      setShow("");
    } else {
      setShow(e.currentTarget.id);
    }
  };

  const onclick2 = (e) => {
    nav(`/log/${param.type}/${e.currentTarget.id}`);
  };

  const CountPage = () => {
    let a = [];
    for (let i = 0; i < data.last_page + 1; i++) {
      if (param.id == i) {
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
      setFilterData(data.data);
    } else {
      setFilterData(
        data.data.filter(
          (data) => data.emergency_type.type_name_eng === param.type
        )
      );
    }
  }, [param, data]);

  return (
    <>
      <LogHeader />
      <LogContainer>
        <ListGroup>
          <ListName>
            학급&nbsp;&nbsp; 종류&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 시간
          </ListName>
          {filterData.map((log) => {
            return (
              <>
                <ListItem>
                  <LogData>
                    <DataInfo>
                      {`${log.classroom}반`}&nbsp;&nbsp;&nbsp;&nbsp;
                      {log.emergency_type.type_name_kor}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {log.capture_file.created_date.replace("T", " ")}
                    </DataInfo>
                    {show == log.capture_file.file_id ? (
                      <>
                        <ShowImg
                          id={log.capture_file.file_id}
                          onClick={onclick}
                        >
                          사진 접기
                          <BiArrowFromBottom />
                        </ShowImg>
                      </>
                    ) : (
                      <ShowImg id={log.capture_file.file_id} onClick={onclick}>
                        사진 보기
                        <BiArrowToBottom />
                      </ShowImg>
                    )}
                  </LogData>
                  {show == log.capture_file.file_id && (
                    // <Img src={log.capture_file.file_path} />
                    <div>
                      <Img src={log.capture_file.file_path} />
                      <ToInfo>자세히보기</ToInfo>
                    </div>
                  )}
                </ListItem>
              </>
            );
          })}
          <Contain>{CountPage()}</Contain>
        </ListGroup>
      </LogContainer>
    </>
  );
};

export default LogTemplate;
